# backend/app/routers/user.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.exc import OperationalError
from backend.app.schemas.user import UserCreate, UserOut
from backend.app.crud.user import create_user, get_user_by_email
from backend.app.auth.auth import authenticate_user, create_access_token
from backend.app.database import SessionLocal

router = APIRouter()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register", response_model=UserOut)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    try:
        db_user = get_user_by_email(db, user.email)
        if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
        
        return create_user(db=db, user=user)
    
    except SQLAlchemyError as db_error:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_error)}")

@router.post("/login")
def login_user(email: str, password: str, db: Session = Depends(get_db)):
    print("users email is:",email, password)
    try:
        user = authenticate_user(db, email, password)
        if user is None:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        access_token = create_access_token(data={"sub": user.email})
        return {"access_token": access_token, "token_type": "bearer"}
    
    except SQLAlchemyError as db_error:
        db.rollback()  # Rollback in case of a database error
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_error)}")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")


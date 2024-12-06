# backend/app/crud/user.py
from sqlalchemy.orm import Session
from backend.app.models.user import User
from backend.app.schemas.user import UserCreate
from passlib.context import CryptContext

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def create_user(db: Session, user: UserCreate):
    print("creating user in database apecalander")
    db_user = User(
        email=user.email,
        fullname=user.fullname,
        username=user.username,
        password=hash_password(user.password)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

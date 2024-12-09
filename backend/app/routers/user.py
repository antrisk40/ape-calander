from fastapi import APIRouter, HTTPException, status
from sqlalchemy.exc import SQLAlchemyError
from backend.app.schemas.user import UserCreate, UserOut, LoginRequest, UserUpdate
from backend.app.crud.user import create_user, get_user_by_email, update_user
from backend.app.auth.auth import authenticate_user, create_access_token

router = APIRouter()

@router.post("/register", response_model=UserOut)
def register_user(user: UserCreate):
    try:
        # Log the incoming user data
        print("this is our user", user)

        # Check if the email already exists
        db_user = get_user_by_email(user.email)
        if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
        
        # Create the new user
        new_user = create_user(user)
        return {"id": new_user["id"], "email": new_user["email"], "fullname": new_user["fullname"], "username": new_user["username"]}

    except SQLAlchemyError as db_error:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_error)}")

@router.post("/login")
def login_user(login_request: LoginRequest):
    try:
        # Extract email and password from the request body
        email = login_request.email
        password = login_request.password
        print("User email is:-", email, password)

        # Authenticate the user
        user = authenticate_user(email, password)
        if user is None:
            raise HTTPException(status_code=401, detail="Invalid credentials")

        # Create access token
        access_token = create_access_token(data={"sub": user["email"]})
        return {"access_token": access_token, "token_type": "bearer"}

    except SQLAlchemyError as db_error:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_error)}")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

@router.put("/users/{user_id}", response_model=UserOut)
def update_user_details(user_id: int, user_update: UserUpdate):
    try:
        # Update the user
        updated_user = update_user(user_id, user_update)
        if not updated_user:
            raise HTTPException(status_code=404, detail="User not found or no updates provided")
        
        return {"id": updated_user["id"], "email": updated_user["email"], "fullname": updated_user.get("fullname"), "username": updated_user.get("username")}

    except SQLAlchemyError as db_error:
        raise HTTPException(status_code=500, detail=f"Database error: {str(db_error)}")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

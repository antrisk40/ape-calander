from backend.app.models.user import User
from backend.app.schemas.user import UserCreate, UserUpdate  # Assuming UserUpdate exists
from backend.app.database import engine  # Replace with your DB connection utility
from passlib.context import CryptContext
from sqlalchemy import update, select
from sqlalchemy.sql import text
from sqlalchemy.exc import SQLAlchemyError

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def create_user(user: UserCreate):
    print("Creating user in database apecalander")
    hashed_password = hash_password(user.password)
    query = User.__table__.insert().values(
        email=user.email,
        fullname=user.fullname,
        username=user.username,
        password=hashed_password
    )
    with engine.connect() as conn:
        result = conn.execute(query)
        conn.commit()
    return {"id": result.inserted_primary_key[0], **user.dict(), "password": "hidden"}

# Function to fetch user by email using SQLAlchemy
def get_user_by_email(email: str):
    try:        
        query = select(User).where(User.email == email)
        
        with engine.connect() as conn:
            result = conn.execute(query).fetchone()  # Result is a Row object        
        if result:
            # Convert Row to a dictionary manually
            return {
                "id": result.id,
                "email": result.email,
                "fullname": result.fullname,
                "username": result.username,
                "password": result.password,
            }
        return None
    except SQLAlchemyError as e:
        print(f"SQLAlchemy Error: {e}")
        raise Exception(f"Error fetching user by email: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
        raise Exception(f"Unexpected error: {e}")


# Function to fetch user by username using SQLAlchemy
def get_user_by_username(username: str):
    try:        
        query = select(User).where(User.username == username)
        
        with engine.connect() as conn:
            result = conn.execute(query).fetchone()  # Result is a Row object        
        if result:
            # Convert Row to a dictionary manually
            return {
                "id": result.id,
                "email": result.email,
                "fullname": result.fullname,
                "username": result.username,
                "password": result.password,
            }
        return None
    except SQLAlchemyError as e:
        print(f"SQLAlchemy Error: {e}")
        raise Exception(f"Error fetching user by username: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
        raise Exception(f"Unexpected error: {e}")

def update_user(user_id: int, user_update: UserUpdate):
    update_data = {}
    if user_update.email:
        update_data["email"] = user_update.email
    if user_update.fullname:
        update_data["fullname"] = user_update.fullname
    if user_update.username:
        update_data["username"] = user_update.username
    if user_update.password:
        update_data["password"] = hash_password(user_update.password)

    if not update_data:
        return None  # Nothing to update

    query = update(User).where(User.id == user_id).values(**update_data)
    with engine.connect() as conn:
        result = conn.execute(query)
        conn.commit()

    return {"id": user_id, **update_data} if result.rowcount > 0 else None

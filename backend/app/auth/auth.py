from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from backend.app.crud.user import get_user_by_email
from passlib.context import CryptContext

SECRET_KEY = "secret"  # Store this securely
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Function to verify password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Function to create access token
def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + expires_delta  # Updated to use timezone.utc
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Function to authenticate user
def authenticate_user(email: str, password: str):
    try:
        user = get_user_by_email(email)  # Fetch the user
        if user is None or not verify_password(password, user["password"]):
            return None
        return user
    except Exception as e:
        raise Exception(f"Error during authentication: {str(e)}")


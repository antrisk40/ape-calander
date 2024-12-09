from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    email: str
    fullname: str
    username: str

class UserCreate(UserBase):
    password: str

    model_config = {"from_attributes": True} 

class UserOut(UserBase):
    id: int

    model_config = {"from_attributes": True}

class UserUpdate(BaseModel):
    email: Optional[str]
    fullname: Optional[str]
    username: Optional[str]
    password: Optional[str]
    
    model_config = {"from_attributes": True}

# Define Pydantic model for login request
class LoginRequest(BaseModel):
    email: str
    password: str

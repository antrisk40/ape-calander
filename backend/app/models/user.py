# backend/app/models/user.py
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from backend.app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    fullname = Column(String)
    username = Column(String, unique=True, index=True)
    password = Column(String)

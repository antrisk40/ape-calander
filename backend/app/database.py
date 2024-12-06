from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from contextlib import contextmanager

# PostgreSQL database URL (replace with your actual credentials)
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:1234@localhost/apecalander" 

# Creating SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)  # 'echo=True' helps log SQL queries

# Creating sessionmaker for database sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Creating a base class for declarative models
Base = declarative_base()

# Dependency to get the database session
@contextmanager
def get_db():
    db = SessionLocal()
    try:
        yield db
    except SQLAlchemyError as e:
        db.rollback()  # Rollback in case of error
        raise e
    finally:
        db.close()

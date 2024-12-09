from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base

# PostgreSQL database URL (replace with your actual credentials)
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:1234@localhost/apecalander"

# Creating SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)  # 'echo=True' helps log SQL queries

# Creating a metadata object
metadata = MetaData()

# Creating a base class for declarative models
Base = declarative_base(metadata=metadata)

from fastapi import FastAPI
from backend.app.database import Base, engine
from backend.app.models import user  # Ensure this imports your models
from backend.app.routers import user as user_router

# Initialize FastAPI app
app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Include the user router
app.include_router(user_router.router)

@app.get("/")
def read_root():
    return {"message": "API is running!"}

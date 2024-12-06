from fastapi import FastAPI
from backend.app.database import Base, engine
from backend.app.models import user
from fastapi.middleware.cors import CORSMiddleware
from backend.app.routers import user as user_router

# Initialize FastAPI app
app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, change to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include the user router
app.include_router(user_router.router)

@app.get("/")
def read_root():
    return {"message": "API is running!"}

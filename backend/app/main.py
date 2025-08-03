from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.api import api_router

app = FastAPI(
    title="Sign Language Translator API",
    description="API for translating sign language to text and vice versa",
    version="1.0.0",
)

# Allow frontend to access the API
origins = [
    "http://localhost:3000",  # React app running locally
    "127.0.0.1:3000",  # React app running locally
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")
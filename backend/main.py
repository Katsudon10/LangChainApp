from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import route

app = FastAPI()
app.include_router(route.router)

origins = ["http://localhost:3000","http://localhost",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
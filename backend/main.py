from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
def hello():



    return {"message": "Hello from my portfolio API"}


@app.get("/api/projects")
def get_projects():


    with open("../database/projects.json", "r") as file:
        projects = json.load(file)
    return projects


@app.get("/api/projects/{project_id}")
def get_projects_id(project_id: int):


    with open("../database/projects.json", "r") as file:
        projects_id = json.load(file)

    for project in projects_id:
        if project["id"] == project_id:
            return project

    raise HTTPException(status_code=404, detail="Project not found(id)")


    
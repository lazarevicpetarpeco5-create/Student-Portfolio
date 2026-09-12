from fastapi import FastAPI
import json

app = FastAPI()


@app.get("/api/hello")
def hello():
    return {"message": "Hello from my portfolio API"}


@app.get("/api/projects")
def get_projects():


    with open("../database/projects.json", "r") as file:
        projects = json.load(file)
    return projects






    
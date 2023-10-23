from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, inspect
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import uvicorn
import os
import logging

logger = logging.getLogger(__name__)
logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG)

DB_IP = os.environ['DB_IP']
ADMIN_USER = os.environ['ADMIN_USER']
ADMIN_PASSWORD = os.environ['ADMIN_PASSWORD']
DB_IP = os.environ['DB_IP']
DB_NAME = os.environ['DB_NAME']
RDS_ADMIN = os.environ['RDS_ADMIN']
RDS_PASSWORD = os.environ['RDS_PASSWORD']

# Initialize FastAPI
app = FastAPI()
# Database setup postgresql://fastapi_traefik:fastapi_traefik@db:5432/fastapi_traefik
DATABASE_URL = f"postgresql://{RDS_ADMIN}:{RDS_PASSWORD}@ignite-db-dev.cpjwpruxdv5c.us-east-2.rds.amazonaws.com/postgres"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

logger.info(f"DB connection: {SessionLocal}")
insp = inspect(engine)
logger.info(f"TABLES: {insp.get_table_names()}")


Base = declarative_base()

# Models
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)

class Project(Base):
    __tablename__ = 'projects'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)

# Create tables
Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Pydantic models
class UserCreate(BaseModel):
    username: str
    email: str

class ProjectCreate(BaseModel):
    name: str
    description: str

@app.get("/")
def read_root():
    return {"message": "Hello, IgniteHub!"}

# CRUD for User
@app.post("/users/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"id": db_user.id}

@app.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {"username": db_user.username, "email": db_user.email}

@app.put("/users/{user_id}")
def update_user(user_id: int, user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    for key, value in user.dict().items():
        setattr(db_user, key, value)

    db.commit()
    db.refresh(db_user)
    return {"id": db_user.id}

@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(db_user)
    db.commit()
    return {"message": "User deleted"}

# CRUD for Project
@app.post("/projects/")
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    db_project = Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return {"id": db_project.id}

@app.get("/projects/{project_id}")
def read_project(project_id: int, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"name": db_project.name, "description": db_project.description}

@app.put("/projects/{project_id}")
def update_project(project_id: int, project: ProjectCreate, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")

    for key, value in project.dict().items():
        setattr(db_project, key, value)

    db.commit()
    db.refresh(db_project)
    return {"id": db_project.id}

@app.delete("/projects/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(db_project)
    db.commit()
    return {"message": "Project deleted"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
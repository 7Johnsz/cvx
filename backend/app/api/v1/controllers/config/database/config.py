from sqlmodel import SQLModel, Session, create_engine, select
from dotenv import load_dotenv
from pathlib import Path

import os

class Database:
    def __init__(self) -> None:
        try:
            env_path = Path(__file__).parents[6] / '.env.dev'
            load_dotenv(env_path)

            connection_string = f'postgresql://{os.getenv("DB_USER")}:{os.getenv("DB_PASSWORD")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'
            
            self.engine = create_engine(
                connection_string,
                echo=True
            )
                
        except Exception as e:
            print(f"Error creating database engine: {e}")
            raise

    def query(self, model, where_clause=None):
        with Session(self.engine) as session:
            stmt = select(model)
            if where_clause:
                stmt = stmt.where(where_clause)
            return session.exec(stmt).all()

    def add(self, instance: SQLModel):
        with Session(self.engine) as session:
            session.add(instance)
            session.commit()
            session.refresh(instance)
            return instance

db = Database()

def get_session():
    with Session(db.engine) as session:
        yield session


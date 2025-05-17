import sys 
from sqlalchemy import Column, ForeignKey, Integer, String 

from sqlalchemy.ext.declarative import declarative_base 
from sqlalchemy.orm import relationship 
from sqlalchemy import create_engine 


Base = declarative_base()


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(80), nullable=False)
    password = Column(String(50), nullable=False)


    @property
    def serialize(self):
        #return serialize 
        return {
            'id': self.id,
            'name':self.name,
            'email':self.email,
            'password': self.password
        }


class Quotes(Base):

    __tablename__ = 'quotes'

    id = Column(Integer, primary_key=True)
    quote = Column(String(200), nullable=False)
    author = Column(String(100), nullable=False)
    # author_id = Column(Integer, ForeignKey('user.id'))
    # author = relationship(User)

    @property
    def serialize(self):
        return {
            'id' : self.id, 
            'quote': self.quote,
            'author': self.author
        }



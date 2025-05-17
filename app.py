from flask import Flask, render_template, request, redirect, flash, jsonify 

app = Flask(__name__)

#https://www.youtube.com/watch?v=71EU8gnZqZQ

@app.route('/')
@app.route('/home')
def home():

    return render_template('quote.html')

@app.route('/quotes/all')
def allquotes():
    return render_template('quotes.html')

@app.route('/quotes/new')
def create_quote():
    return render_template('newquote.html')


@app.route('/quotes/<string:author>')
def quote(author):
    return render_template('authorquote.html')

@app.route('/user/login')
def login():
    return render_template('login.html')

@app.route('/user/register')
def register():

    return render_template('newuser.html')


if __name__ == '__main__':
    app.secret_key = ''
    app.debug = True
    app.run(host='localhost', port=8000)

# Author: CHRIS
# Date: 2017.1.21
# Address: Peking University
from flask import Flask, make_response, request, render_template, url_for
from flask_socketio import SocketIO, send, emit
import datetime

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'hello world'

@app.route('/index')
def request_page():
    rows = []
    for i  in range(1, 10):
        items = []
        for j in range(0, 2):
            items.append({
                'username': 'chris',
                'avatarUrl': 'http://localhost:5000/static/img/shark.png',
                'daliyText': '转角一般不会遇到爱只会遇到乞丐。',
                'contentText': '喜欢今天的天气，就像喜欢你一样。',
                'contentImg' : 'http://localhost:5000/static/img/0.jpg',
                'publishDate': '1d',
                'commentNum': 1,
                'loveNum': 1,
            })
        rows.append(items)

    return render_template('index.html', rows=rows)

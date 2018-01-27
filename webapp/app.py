from flask import Flask, make_response, request, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def hello_world():
    outdate=datetime.datetime.today() + datetime.timedelta(days=30)

    response = make_response('202 OK! Hello world')
    response.set_cookie('Name', 'chris', expires=outdate)
    # return response
    return render_template('flask.html'),


@app.route('/cookie')
def get_cookie():
    cookies = request.cookies
    print(cookies.get('Name'))
    return cookies.get('Name')

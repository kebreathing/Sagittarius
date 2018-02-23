from flask import Flask, render_template
from flask import request
from flask_socketio import SocketIO, send, emit


# add Fkask-SocketIo to Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# web server使用的优先级别： eventlet/gevent/Werkzeug Server
if __name__ == '__name__':
    socketio.run(app)

# 监听客户端发出的请求
# @socketio.on('message')
# def handle_message(message):
#     print('received message: ' + message)
#
# @socketio.on('json')
# def handle_json(json):
#     print('received json: ' + str(json))

# 支持多参数，但是支持同override么？ 不支持，必须得不同名
@socketio.on('my multi-args')
def handle_multi_args(arg1, arg2, arg3):
    print('received args: ' + arg1 + arg2 + arg3)

# 添加namespace，怎么用？
# client-side: socket = io.connect('url/test')
@socketio.on('namespace', namespace='/test')
def handle_namespace_event(json):
    print('received from namespace: ' + str(json))

# 如果修饰器的语法不是很方便的时候可以用下面的方式做
# def namespace_event_handler(json):
#     print('received from namespace: ' + str(json))
# socketio.on_event('namespace', namespace_event_handler, namespace='/test')

# 存在返回值
# client-side: how to get the return value
@socketio.on('my event')
def handle_my_custom_event(json):
    print('received json: ' + str(json))
    return 'one', 2


# emit send 函数的使用
@socketio.on('send_message')
def handle_message_and_send(message):
    # 往哪发？
    send(message)

@socketio.on('send_json')
def handle_json_and_send(json):
    send(json, json=True)

# 服务端使用emit，emit/send需要对应客户端指定的接口
@socketio.on('emit_json')
def handle_json_and_emit(json):
    emit('my response', json)

@socketio.on('my response')
def handle_my_response(json):
    print('received from handle_json_and_emit: ' + str(json))

def ack():
    print('message from client has recevied!')

# 由服务器发回的response发回的类型
@socketio.on('my event callback')
def handle_my_callback_event(json):
    print(request.sid)
    emit('my response', 'server send the json back: ' + str(json), callback=ack)

@socketio.on('connect')
def test_connect():
    print(request.sid + 'has connected but I reject it')
    return False;

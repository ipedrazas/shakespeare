from flask import Flask, jsonify
import json
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)


data = {}
with open('/api/data.json') as json_data:
    data = json.load(json_data)
    

@app.route('/shakespeare')
def shakespeare():
    return jsonify(data)


@app.route('/api')
def index():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
        threaded=True)

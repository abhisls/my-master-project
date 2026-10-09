# Terminal में चलाएं: pip install flask
from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory(os.getcwd(), 'index.html')

    @app.route('/<path:path>')
    def static_files(path):
        return send_from_directory(os.getcwd(), path)

        if __name__ == '__main__':
            print("Python Flask Server active on http://localhost:5000")
                app.run(debug=True, port=5000)
                
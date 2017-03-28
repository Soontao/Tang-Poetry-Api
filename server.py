# -*- coding: utf-8 -*-
from flask import Flask, jsonify
import os
import sqlite3

db_path = './tang_poet.db'
if not os.path.exists(db_path):
    poets_file_path = 'sqlite_poetries.sql'
    poets_db_file = open('sqlite_poetries.sql', 'r', encoding="utf8").read()
    db = sqlite3.connect(db_path)
    db.executescript(poets_db_file)
    db.commit()
    db.close()

port = os.getenv("port", 3001)
db = sqlite3.connect(db_path)

app = Flask(__name__)


@app.route("/")
def index():
    return "tang poetries api"


@app.route("/poets")
def poets():
    r = db.execute("SELECT poets.name as `poet_name` , COUNT(*) as   `poetry_count` FROM `poetries` left join poets ON poets.id = `poet_id` GROUP BY `poet_id` ORDER by `poetry_count` desc").fetchall()
    return jsonify(r)


if __name__ == "__main__":
    app.run(port=port)

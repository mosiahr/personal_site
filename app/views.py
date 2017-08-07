#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import render_template, json, url_for
from app import app
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Главная')


@app.route('/calculator')
def calculator():
    json_url = os.path.join(BASE_DIR, 'data', 'osago.json')
    data = json.load(open(json_url, encoding="utf-8"))
    data = json.dumps(data, ensure_ascii=False)
    return render_template('calculator.html', data=data, title='Калькулятор ОСАГО')
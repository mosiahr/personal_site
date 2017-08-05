#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Главная')

@app.route('/calculator')
def calculator():
    return render_template('calculator.html', title='Калькулятор ОСАГО')
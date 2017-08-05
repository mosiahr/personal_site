#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask
from flask_bootstrap import Bootstrap

app = Flask(__name__)
# app.config.update(
#     DEBUG=True,
# )

app.config.from_object('config')

Bootstrap(app)
from app import navbar
from app import views



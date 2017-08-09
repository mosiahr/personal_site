#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask
from flask_bootstrap import Bootstrap
from flask_nav import register_renderer


app = Flask(__name__)
app.config.from_object('config')
Bootstrap(app)

from app.navbar import CustomRenderer
from app import navbar
register_renderer(app, 'custom', CustomRenderer)
print(CustomRenderer)

from app import views



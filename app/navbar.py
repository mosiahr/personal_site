#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from app import app
from flask_nav import Nav
from flask_nav.elements import Navbar, View, Link

nav = Nav()

@nav.navigation()
def topnavbar():
    return Navbar(
        Link('Personal_site', '/'),
        View('Home', 'index'),
        View('Калькулятор', 'calculator'),
    )

nav.init_app(app)
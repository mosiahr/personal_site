#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from app import app
from flask_nav import Nav
from flask_nav.elements import Navbar, View, Link
from flask_bootstrap.nav import BootstrapRenderer


class CustomRenderer(BootstrapRenderer):
    def visit_Navbar(self, node):
        nav_tag = super(CustomRenderer, self).visit_Navbar(node)
        nav_tag['class'] += 'navbar navbar-inverse navbar-fixed'
        return nav_tag

topbar = Navbar(
                Link('Personal_site', '/'),
                View('Home', 'index'),
                View('Калькулятор', 'calculator'),
            )

nav = Nav()
nav.register_element('top', topbar)
nav.init_app(app)
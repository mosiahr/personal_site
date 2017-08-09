#!/usr/bin/python3

activate_this = '/var/www/personal_site/flaskenv/bin/activate_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/personal_site/")
from app import app as application
#application.secret_key = 'here_the_key'

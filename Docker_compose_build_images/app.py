# app.py

import os

app_version = os.environ.get('APP_VERSION', 'unknown')
environment = os.environ.get('ENVIRONMENT', 'unknown')

print(f"Running Python App version {app_version} in {environment} environment.")
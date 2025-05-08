#!/bin/bash

# Copy configuration files
cp auth0-assistant0/.env.example auth0-assistant0/.env.local

# Install packages
cd auth0-assistant0 && npm install
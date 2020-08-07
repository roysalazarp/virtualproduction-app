#!/bin/sh
cd /opt/virtualproduction-app/users-service
mv .production.env .env
yarn

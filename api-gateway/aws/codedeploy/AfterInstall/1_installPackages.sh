#!/bin/sh
cd /opt/virtualproduction-app/api-gateway
mv .production.env .env
yarn

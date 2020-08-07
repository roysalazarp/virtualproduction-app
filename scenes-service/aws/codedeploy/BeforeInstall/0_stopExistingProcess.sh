#!/bin/sh

deployment_dir=/opt/virtualproduction-app/scenes-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd $deployment_dir

  pm2 stop scenes-service || true
fi

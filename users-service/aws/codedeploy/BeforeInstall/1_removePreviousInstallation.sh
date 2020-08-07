#!/bin/sh

deployment_dir=/opt/virtualproduction-app
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  rm -rf $deployment_dir
fi
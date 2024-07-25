#!/bin/sh

# Build the project
echo "Building the project..."

docker build . -t lema-app --build-arg="NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL" --build-arg="APP_PORT=$FRONT_APP_PORT"


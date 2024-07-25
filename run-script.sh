#!/bin/sh

# Run the project
echo "Running the project..."
docker run -p $FRONT_APP_PORT:$FRONT_APP_PORT -d lema-app

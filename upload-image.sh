#!/bin/sh

PROJECT_ID=focus-skein-423217-j9
REGION=us-east1
IMAGE_NAME=lema-app

# Configure docker to use the gcloud command-line tool

echo "Configuring docker to use the gcloud command-line tool auth..."
gcloud auth configure-docker $REGION-docker.pkg.dev

# Upload the image to the registry

echo "Uploading the image to the registry..."

docker tag $IMAGE_NAME $REGION-docker.pkg.dev/$PROJECT_ID/docker-repo/$IMAGE_NAME:latest
docker push $REGION-docker.pkg.dev/$PROJECT_ID/docker-repo/$IMAGE_NAME:latest

echo "Image uploaded successfully."

echo "Listing images in the registry..."
gcloud artifacts docker images list $REGION-docker.pkg.dev/$PROJECT_ID/docker-repo/$IMAGE_NAME --include-tags

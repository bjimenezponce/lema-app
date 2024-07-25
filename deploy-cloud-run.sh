#!/bin/sh

PROJECT_ID=focus-skein-423217-j9
REGION=us-east1
IMAGE_NAME=lema-app

# Deploy the project to Cloud Run
echo "Deploying the project to Cloud Run..."

gcloud run deploy $IMAGE_NAME --image=$REGION-docker.pkg.dev/$PROJECT_ID/docker-repo/$IMAGE_NAME:latest \
    --platform=managed --region=$REGION --allow-unauthenticated --port=$FRONT_APP_PORT --memory=2048Mi --cpu=2 --timeout=600s --min-instances=1 --max-instances=5 \
    --set-env-vars=NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL,APP_PORT=$FRONT_APP_PORT --network=projects/$PROJECT_ID/global/networks/default


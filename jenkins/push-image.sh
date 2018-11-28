#!/bin/bash

IMAGE_TAG=$1

docker build -t bluehotdog/versions_tracker_api:$IMAGE_TAG .

docker push  bluehotdog/versions_tracker_api:$IMAGE_TAG
# Hello World!

## Kubernetes

1. Build docker images
```sh
docker build -t gcr.io/[GCP_PROJECT]/stupid-app-frontend .
docker build -t gcr.io/[GCP_PROJECT]/stupid-app-backend .
```
2. Test locally
```sh
docker run -d -p 3000:3000  gcr.io/[GCP_PROJECT]/stupid-app-frontend 
docker ps
curl localhost:3000
docker stop [CONTAINER_ID]
```
3. Push docker
```sh
gcloud docker -- push gcr.io/[GCP_PROJECT]/stupid-app-frontend
gcloud docker -- push gcr.io/[GCP_PROJECT]/stupid-app-backend
```
4. Deploy backend
```sh
kubectl create -f frontend-deployment.yaml
kubectl create -f frontend-service.yaml
```
5. Deploy frontend
```sh
kubectl create -f backend-deployment.yaml
kubectl create -f backend-service.yaml
```
6. Test
```sh
kubectl get services
curl 35.205.108.215/backend
```
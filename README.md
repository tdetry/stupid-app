# Hello World!

## Docker

cd in proper folders

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

## Kubernetes

# Easy way 

1. Deploy services
Services to be deployed first in order to be accessible as environment variables
```sh
kubectl create -f backend-service.yaml
kubectl create -f frontend-service-LoadBalancer.yaml
```

2. Deploy Pods
```sh
kubectl create -f backend-deployment.yaml
kubectl create -f frontend-deployment.yaml
```

3. Test
```sh
kubectl get services
curl 35.205.108.215/backend
```

# Set-up load balancing

1. Test
```sh
kubectl get services
curl 35.205.108.215/backend
```

7. Secure loadBalancing 
```sh
kubectl create -f frontend-service-NodePort.yaml
kubectl apply -f basic-ingress.yaml
kubectl get ingress
```


## To do
- how to enable httpS
- KMS
- DTAP
- CI/CD
- Env variable management
- update / rollback
- health checks


## Notes: 
- how to do services discovery? https://kubernetes.io/docs/concepts/services-networking/service/

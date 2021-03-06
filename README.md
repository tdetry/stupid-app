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

### With Services

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

3. Test within VM
```sh
kubectl get services
curl [CLUSTER-IP]:[PORT]
```

4. Test browser
```sh
kubectl get services
curl [EXTERNAL-IP]/backend
```

### With Ingress

1. Set-up Ingress
```sh
kubectl create -f frontend-service-NodePort.yaml
kubectl apply -f basic-ingress.yaml
kubectl describe ingress basic-ingress
kubectl get ingress
curl [ADDRESS]/backend
```

2. Enable TLS/SSL

2.1. create certificate

you need to own  the domain

2.2. add certificate to Google 

<https://cloud.google.com/compute/docs/load-balancing/http/ssl-certificates>

2.3. configure endpoint in loadbalancer

<https://console.cloud.google.com/net-services/loadbalancing/list>

### Store sensitive information as secret

<https://kubernetes.io/docs/concepts/configuration/secret/>

### Health checks

<https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/>




## To do
- KMS
- DTAP
- CI/CD
- Env variable management
- Update / rollback



## Notes: 
- how to do services discovery? https://kubernetes.io/docs/concepts/services-networking/service/

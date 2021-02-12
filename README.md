# API Boiler-Plate
Basic Node Express REST API that serves some data from a local JSON data file. Uses Docker-Compose for development. Has a frontend webpage, and backend API, routed with nginx and express.

## Getting Started
Clone repository.

## DEVELOPMENT

### Build Local Images
Install Docker Desktop.
```
$ docker-compose build
```
#### OPTIONAL - Browser Test 
``` 
$docker-compose up
```
Visit: [localhost:3050](http://localhost:3050)
```
$ Docker stop CONTAINERNAMEHERE
```
### Build Local Node Cluster
Enable Kubernetes in Docker Desktop.

Build NGINX Ingress Controller then build API-Boilerplate Node. (Ref 1)
```
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
$ kubectl apply -f k8s
```
Visit: [localhost](http://localhost/)

## Style Guide
Frontend - https://github.com/airbnb/javascript/tree/master/react

## TODO
1. Add multiple data sources (ie Redis, PostGres, other).
2. Set up production version on Kubernetes.
3. Add testing.

## References
[1 - https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps](https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps)

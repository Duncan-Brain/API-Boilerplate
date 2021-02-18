docker build -t duncanbrain/boiler-api-frontend:latest -t duncanbrain/boiler-api-frontend:$SHA -f ./frontend/Dockerfile.next ./frontend
docker build -t duncanbrain/boiler-api-api:latest -t duncanbrain/boiler-api-api:$SHA -f ./api/Dockerfile ./api

docker push duncanbrain/boiler-api-frontend:latest
docker push duncanbrain/boiler-api-api:latest

docker push duncanbrain/boiler-api-frontend:$SHA
docker push duncanbrain/boiler-api-api:$SHA

kubectl --kubeconfig=config-travisci-sa apply -f k8s
kubectl --kubeconfig=config-travisci-sa set image deployments/frontend-deployment frontend=duncanbrain/boiler-api-frontend:$SHA
kubectl --kubeconfig=config-travisci-sa set image deployments/api-deployment api=duncanbrain/boiler-api-api:$SHA

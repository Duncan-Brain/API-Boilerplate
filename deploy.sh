docker build -t tempfrontend -t duncanbrain/boiler-api-frontend:latest -t duncanbrain/boiler-api-frontend:$SHA -f ./frontend/Dockerfile.next ./frontend
docker build -t tempapi -t duncanbrain/boiler-api-api:latest -t duncanbrain/boiler-api-api:$SHA -f ./api/Dockerfile ./api

docker push duncanbrain/boiler-api-frontend:latest
docker push duncanbrain/boiler-api-api:latest

docker push duncanbrain/boiler-api-frontend:$SHA
docker push duncanbrain/boiler-api-api:$SHA

kubectl --kubeconfig=$HOME/.kube/config apply -f k8s
kubectl --kubeconfig=$HOME/.kube/config set image deployment/frontend-deployment frontend=tempfrontend
kubectl --kubeconfig=$HOME/.kube/config set image deployment/api-deployment api=tempapi

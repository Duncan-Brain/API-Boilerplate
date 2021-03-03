# API Boiler-Plate
Basic Node Express REST API that serves some data from a local JSON data file. Has a Github Actions workflow for production with Kubernetes. Includes Docker-Compose for development.

Works with Digital Ocean, possibly other hosts as well.

## Getting Started
Clone repository.

## DEVELOPMENT

### Build Local Images
Install Docker Desktop. Navigate to project folder. Then..
```
$ docker-compose build
$ docker-compose up
```
Visit: [localhost:3050](http://localhost:3050)
```
$ docker stop <YOURCONTAINER>
```
## Production
1. Create Kubernetes cluster with your web service.
2. Gain access to cluster server and retrieve kubeconfig file.

#### Example with Digital Ocean:

Create account API Token. Save token in file.
Retrieve admin kubeconfig file.
```
$ doctl auth init --access-token=$(cat /<YOURPATH_TO_API_TOKEN>)
# Typically saved to $HOME/.kube
$ doctl kubernetes cluster kubeconfig save <YOURSERVER>
```
#### End Example
3. Create a service account for github actions named "github-actions".
```
$ kubectl create sa --namespace kube-system github-actions
$ kubectl create clusterrolebinding github-actions-admin --clusterrole=cluster-admin --serviceaccount=kube-system:github-actions
```
4. Copy the file .IGNORE.github-actions-sa file to your .kube folder.
5. Then DELETE this file from your repo.(!! Only encrypted versions of this file should be added to your repo)
6. Rename the file to simply github-actions-kubeconfig
7. copy the missing elements to the template from your existing kubeconfig file
8. Add the secret service account token to you kubeconfig file which can be found manually using Kubernetes Dashboard or using kubectl as in tutorial [1]

9. Encrypt this kubeconfig file using a secret passphrase which you will need to remember for step 15.
```
gpg --symmetric --cipher-algo AES256 github-actions-kubeconfig
```
10. Add the .gpg encrypted file to your repository. (!! Again, only encrypted versions of this file should be added to your repo)

11. Create docker repositories:
 -  \<DOCKER_USERNAME>/boiler-api-frontend
 -  \<DOCKER_USERNAME>/boiler-api-api

12. Create a Docker API Token in DockerHub which you will need to remember for step 15.

13. Purchase a domain name.

14. Edit k8s files with your personal information
 - Add your \<DOCKER_USERNAME> to Deployments
 - Add your \<DOMAINNAME> to the Ingress Server AND the Certificate
 - Add your \<EMAIL> to the Issuer

15. Add secrets to Github Actions repository
 - DECRYPT_PASSPHRASE (step 9)
 - DOCKER_HUB_USERNAME, DOCKER_HUB_TOKEN, DOCKER_HUB_EMAIL (step 12)

16. Remove the .off suffix from the Github testdeploy.yaml workflow to enable the Github workflow

17. Push to master to run workflow and launch to production.

18. Get the endpoint \<IP_address> from your ingress-nginx-controller or Load Balancer

19. Add A Records to your Domain name service pointing to the \<IP_address>. My example uses subdomains `api-boilerplate.<DOMAIN>.com` and `www.api-boilerplate.<DOMAIN>.com`.

20. Apply the certificate.yaml to generate a certificate request using kubectl.
```kubectl apply -f k8s/certificates/certificate.yaml```

21. Wait an 30 mins to an hour for LetsEncrypt to process the certificate request. Then check your website!

## Style Guide
Frontend - https://github.com/airbnb/javascript/tree/master/react

## TODO
1. Add multiple data sources (ie Redis, PostGres, other).
2. Add testing.

## References
1 - Setting up a Service Account
- [https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contengaddingserviceaccttoken.htm](https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contengaddingserviceaccttoken.htm)

2 - Jest/Next setup
- [https://levelup.gitconnected.com/configuring-jest-for-next-js-react-and-babel-from-scratch-bb3b7751329b](https://levelup.gitconnected.com/configuring-jest-for-next-js-react-and-babel-from-scratch-bb3b7751329b)

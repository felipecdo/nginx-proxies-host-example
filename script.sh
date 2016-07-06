docker rm -f $(docker ps --format "{{.ID}}")

docker build -t uux/app ./application

docker run -d -p 3000:3000 --name beapp uux/app

docker build -t nginx/proxy ./nginx-proxy

docker run -d -p 80:80 --link beapp --name NGINX nginx/proxy
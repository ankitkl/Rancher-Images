Command used to build it:

docker build -t node-app:v2 .

docker run -itd -p 8080:8080 -e PORT=5000 node-app:v2

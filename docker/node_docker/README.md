# node app with Docker

I am using docker-compose to create image and start the container.

Current working directory is linked with the /src/app directory inside the container. This can be proved by logging the content of /hosted_vol which is populated by the node application running inside the container.

- After populating the files
```
docker exec sample_node_app ls /src/app/hosted_vol
json_data_1716553507256
json_data_1716553532903
json_data_1716553533674
json_data_1716553534399
```

- After manually deleting the generated files from our host machine
```
docker exec sample_node_app ls /src/app/hosted_vol
```
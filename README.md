## L1vestack examples

### Detailed instructions on how to create your own image

### step1 :

### In your own project, prepare a Dockerfile to create an image

### step2 :

```bash
docker build -t ghcr.io/{Your login by githab}/{your name}:latest(or another any tag) .
```

### step3 :

```bash
docker login ghcr.io
```
### where
login: Your login by githab
password: Your token on GitHub, where writing packages is allowed

### step4 :

```bash
docker login ghcr.io
```
### where
login: Your login by githab
password: Your token on GitHub, where writing packages is allowed


### step5 :

```bash
docker login ghcr.io
```

### step6 :

```bash
docker run -d -p 80:80 --name example-app-container ghcr.io/mr-kornev-Alexey/example:latest
```


Enjoy 😚✨

## L1vestack examples

### Detailed instructions on how to create your own image

### step1 :

### In your own project, prepare a Dockerfile to create an image

### step2 :

```bash
docker build -t ghcr.io/{Your login by githab}/{your name}:latest(or another any tag) .
```

### step3 :
### for CHECK

```bash
docker run -d -p 80:80 --name example-app-container ghcr.io/{Your login by githab}/{your name}:latest
```

### step4 :

```bash
docker login ghcr.io
```
### where
login: Your login by githab
password: Your token on GitHub, where writing packages is allowed

_________________________________________________________________________________________
Be sure to select the checkbox: record packages as in the screen

![Image](https://github.com/user-attachments/assets/bdef16c0-76c3-4c24-8e3e-4002461043f3)

_________________________________________________________________________________________


### step5 :

```bash
docker push ghcr.io/{Your login by githab}/{your name}:latest
```



Enjoy 😚✨

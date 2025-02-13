## L1vestack

### What Is This Project
A simple landing page that developed by react with green theme.

## How Start Project In Local

### step1 :

```bash
git clone https://github.com/MR-Kornev-Alexey/example.git
```

### step2 :

```bash
cd example && npm install
```

### step3 :

```bash
npm run start
```

### step4 :

### Prepare a Dockerfile to create an image

### step5 :

```bash
docker build -t ghcr.io/{Your login by githab}/{your name}:latest(or another any tag) .
```

### step6 :
### for CHECK

```bash
docker run -d -p 80:80 --name example-app-container ghcr.io/{Your login by githab}/{your name}:latest
```

### step7 :

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


### step8 :

```bash
docker push ghcr.io/{Your login by githab}/{your name}:latest
```



Enjoy 😚✨

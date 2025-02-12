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

```bash
docker build -t ghcr.io/{Your login by githab}/{your name}:latest(or another any tag) .
```

### step5 :

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

# Oxford Dictionary Clone

## About The Project
This web application was developed for educational purposes.The main aim of
the project is to understand HTML, CSS, SASS, Bootstrap
and Vue technologies.

The project uses Oxford Dictionary API to search the meanings of
English words. API is free but it is limited.

The project is developed by _Mert Y. Ertugrul_ 

## Important Note
Oxford Dictionary API does not allow CORS requests from client side
for security reasons, therefore proxy was used on the project so that
the API can be tested.

The proxy is defined in the vue.config.js file. If you run the project 
other than http://localhost:8080/ you need the change proxy otherwise
the API does not allow client side to request data.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### ESlint Auto Fix
```
npx eslint-auto-fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

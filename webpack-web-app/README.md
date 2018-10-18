# webpack-web-app

A JavaScript web application that requires compilation\transpiling before being deployed to a web server.

## Getting Started

Install all required dependencies with:
```
npm install
```
Compile the applicaiton with:
```
npm run-script build
```
Then launch the web server with:
```
http-server ./dist
```

## Live Reloading (Option 1 - webpack --watch)
Executing the following command to compile the application and watch for saved changes to re-build (see `package.json` for details of the `watch` script): 
```
npm run-script watch
```

Then run from the command line with:
```
live-server ./dist
```

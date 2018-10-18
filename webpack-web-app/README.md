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

## Live Reloading (Option 2 - webpack-dev-server)
`webpack-dev-server` has been added to the project using `npm install --save-dev webpack-dev-server` and `webpack.config.js` has been updated to specify the webpack output folder that should be used. A start script has also been added to `package.json` to execute `webpack-dev-server --open`.

From the command line you can now execute the following command:
```
npm run-script start
```

## Live Reloading (Option 3 - webpack Hot Module Replacement)
With `webpack.config.js` updated to the include `HotModuleReplacementPlugin` and include the `webpack-dev-server` config `hot:true`, the start script can now be used to launch `webpack-dev-server` with Hot Module Replacement enabled:
```
npm run-script start
```
To specify which dependent modules that a particular module can accept being updated, the following code template should be added to the module.
```
if (module.hot) {
    module.hot.accept('[dependent]', function () {
        console.log('Accepting the updated <current>!');
    })
}
```
`[dependent]` should be replaced with the name of the file you are accepting.  
`[current]` should be replaced with the current filename.
In the callback function you should also include code to refresh any saved references to objects created by the dependent module.

If you can't safely refresh any object references then you should not `accept` the module to be changed.
If a module or any parent modules are not accepted then the whole page will be reloaded and state will be lost.

In this project `app.js` and `string-modifier.js` have been updated to include this code template. 

To see Hot Loading Module in practice:
1. Launch the app with `npm run-script start`
2. Enter a value in the text box and click 'Submit'
3. The app will then display the processed string (which is saved in the application state)
4. Modify the string processing implementation in  `string-modifier.js`, `string-appender.js` or `string-prepender.js`.
5. Save your changes (and observer that the page does not reload and lose state)
6. Click 'Submit' again
7. The app will then display an additional processed string using you new implementation
8. Be amazed!

You can also try editing a module that isn't being accepted (i.e. `index.js` or `app.js`) and you will see the saving the change will cause the app to reload in the browser.
#Angular Basee

##Dependencies
AngularJS : https://angularjs.org/

Angular Ui Router : https://github.com/angular-ui/ui-router/

Angular Ui Bootstrap : http://angular-ui.github.io/bootstrap/
RequireJS
Less
Jade
Grunt
NodeJS

##Setup
To install all required dependencies run :
 npm install

If you don't already have grunt installed run :
 sudo npm install -g grunt-cli

##Building
Our build process uses grunt.
To build for development purpose and still have a readable compiled app run :
 grunt default

To build for production and get a minified app, run :
 grunt production


##Running
We provide a local node app to run your webapp against a proxy.
To run it type :
 node node/app

If you want to specify a backend URL to use you can use it as follow :
 node node/app --host <host> --port <port>

<port> is optional. It's default value will be 8080.

Running webapp will be available at :
 http://localhost:7000

##Live Edit
In order for you app to take your changes into account run :
 grunt watch

It will watch all changes occuring to your files and re-build your app.
e.g : If you modify less files, only the CSS output will be recompiled

What ??? I'm developping JS and HTML app and I have to compile ?
This is arguable but it will keep your development closer to the production release.
DI issues will appear in development and not while continuous integration process.

##Unit Testing
TBD
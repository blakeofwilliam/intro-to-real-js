# Intro to real Javascript
This is a basic project to demonstrate a more common real-world workflow for Javascript development on both the client and server side.

## Table of contents
- [Using npm for dependencies](#using-npm-for-dependency-management)
    - [node.js overview](#nodejs-overview)
    - [npm overview](#npm-overview)
    - [The basics of npm](#the-basics-of-npm)
- [Using open-source npm packages in your code](#using-open-source-npm-packages-in-your-code)
    - [The require method](#the-require-method)
    - [Example usage](#example-usage)
- [Express](#express)

## Using npm for dependency management
node.js and npm go hand in hand with frontend, backend, and full-stack Javascript development. Nowadays, they're considered default knowledge requirements in most real-world Javascript projects. In this section, we'll review exactly what node.js and npm are and how they're used to build robust websites without having to build everything from scrath. This is done by utilizing the open-source community and its adoption of node.js and npm as a shared standard for package development, production, sharing, and inclusion in any given project.

### node.js overview
So what is node.js? 

In order to fully understand this, there's a little bit of foundational Javascript history to wrap your head around. Javascript historically was considered a language that could (and should) only be run in the web browser. This served its purpose for a very long time, and resulted in some very light code that ran incredibly fast and accomplished incredibly complex tasks in very short periods of time. In short: Javascript became a very performant scripting language.

#### Enter node.js
The concept behind node.js was to take this highly perfomant scripting language, and give it a wrapper (that is not the web browser) to execute Javascript without requiring a browser while also providing access to the lower-level machine that is typically reserved for more traditional server-side languages.

This allowed Javascript to access the file server, to run an HTTP server to accept its own web requests, and to perform command-line triggered tasks locally on the machine. For example, you could create a single project that houses an HTTP server to accept requests at all applicable routes, has some command-line executed Javascript tasks to convert your LESS to CSS... _**all with just Javascript**_!!!

This is just a high-level explanation of what node.js is used for, but it only scratches the surface. In a "quick start" scenario, the real power of node.js comes with its counterpart [npm](#npm-overview).

### npm overview
npm is the "node package manager". It is a node.js provided command line tool. This command line tool allows you to add a configuration file to your project called `package.json` that defines some basic info about your Javascript project like the name, version, author, etc. However, the key point here is that it also allows you to add externally hosted dependencies that get pulled down from the npm package registry to be used directly in your project.

#### npm init
The easiest way to create the `package.json` is in the command line from your project directory.

This is done pretty easily in Visual Studio Code as long as you have [Jun Han's Terminal extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal) installed.

Open the terminal in Visual Studio Code and run the following code:

```bash
# initialize npm in your project
npm init
```

After you run the `npm init` command, you will be given a set of prompts for information about the npm project you're initializing.

**package name**: 
The name of your npm project. This can be any string without spaces. The value displayed in parentheses is the suggested value from npm. If you simply hit `enter` without providing your own value, then this value will be used instead.

**version**:
The version of your project. Typically the suggestion is suitable for a new project, and this can be manually updated in future revisions of your application in the resulting `package.json` file. For now, the default of `1.0.0` is completely fine.

**description**:
This is an optional description of what your project is, but is by no means necessary in this case. However, feel free to provide a value just explaining what it is you're currently working on if you like.

**entry point**:
This is not necessary for our current example, so you can just hit `enter` on this one to use the suggestion.

**test command**:
This is not necessary for our current example, so you can just hit `enter` on this one to use the suggestion.

**git repository**:
This is not necessary for our current example, so you can just hit `enter` on this one to use the suggestion.

**keywords**:
This is not necessary for our current example, so you can just hit `enter` on this one to use the suggestion.

**author**:
Your name & email in the following format: `Full Name <email@example.com>`.

**license**:
Given that node.js and npm are central parts of the open-source community, this is just an opportunity to flag the type of usage license you'd like to enforce on your project. In this case, you can type `UNLICENSED`.

After providing these values, you'll be shown the JSON configuration that is about to be written to your `package.json` file. You can hit `enter` to approve this.

## Using open-source npm packages in your code
As mentioned before, the real benefit of npm in the case of Javascript development is that you can simply manage open-sourced projects and resources that other people have developed. There are two ways to include these dependencies in your project: with and without saving the dependency to your `package.json`. I suggest always saving your dependecies to your `package.json`, but I'll demonstrate both.

### Installing dependencies and saving to package.json
The basic command to install a package dependency is `npm install package-name`. This is referencing the name of the package as published on the [npm registry](https://www.npmjs.com/). The addition of the `--save` flag to this command will ensure that this dependency is stored in our `package.json`.

### Installing express
Using this knowledge, we'll be installing a single dependency for this example project: `express`. We'll get to what this package allows us to do at a later point in time, but for now, simply run `npm install express --save` in the Visual Studio Code terminal.

After running this command, you should see a new directory in your project folder called `node_modules`. This is the location that npm installs project dependencies. If that's there, you've successfully installed your first dependency!

### The require method
Before we actually use this new dependency, it's important to understand _how_ these dependencies are included in your project code.

As mentioned earlier on, node.js exposes to Javascript some previously unavailable functionality like access to the file system. This is actually incredibly useful in using our npm dependencies. There is a super complicated manner in which we could use this filesystem access to look into the `node_modules` directory and file the `express` files we need in our project and eventually – after dozens of lines of code – we'd have access to the functions and classes included there.

However, node.js has given us a much easier way to do this and it's a simple method called `require`. The require method takes a single argument. In this example, that argument we'll provide is simply the name of the dependency your want to use in your project. 

That will look like this: `require('express');`. The output of this method is the dependency's exported Javascript code. That may not be completely clear at this point, but it will be very soon, I promise!

### Using our new dependency
In your project folder, create a new file called `index.js`.

In this file, add the following code:

```javascript
// require the express package in this file 
// and store it in a variable for later use
const express = require('express');
// create a new instance of `express`
const app = express();
// give our app some basic rules about what to 
// do with a web request
app.get('/', (request, response) => {
    response.send('I just configured a webserver!');
});

// tell our app what port to listen for requests on
app.listen(3000, () => {
    console.log('App is listening on localhost:3000...');
});
```

We'll dive into what all of this code does soon, but for now, bask in the glory of the fact that you just configured a web server in Javascript!

### Running your web server
In order to see this thing in action, open the Visual Studio Code terminal, and run the following command:

```bash
node index.js
```

You should see a message in the terminal saying `App is listening on localhost:3000...`. If you see this, your webserver is running! You can visit [http://localhost:3000](http://localhost:3000) in your web browser and see your work in action.

## Express
Comming soon...

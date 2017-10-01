# Intro to real Javascript
This is a basic project to demonstrate a more common real-world workflow for Javascript development on both the client and server side.

## Table of contents
- [Part 1: Using npm for dependencies](#part-1-using-npm-for-dependency-management)
    - [node.js overview](#nodejs-overview)
    - [npm overview](#npm-overview)
    - [The basics of npm](#the-basics-of-npm)
- [Part 2: Using open-source npm packages in your code](#part-2-using-open-source-npm-packages-in-your-code)
    - [The require method](#the-require-method)
    - [Example usage](#example-usage)
- [Part 3: Express](#part-3-express)
    - [HTTP Server overview](#http-server-overview)
    - [The Client/Server relationship](#the-clientserver-relationship)
    - [Request Methods](#request-methods)
    - [Status Codes](#status-codes)
    - [How this all applies to Express](#how-this-all-applies-to-express)
    - [The breakdown](#the-breakdown)
- [Part 4: Extending our application](#part-4-extending-our-application)
    - [More project setup](#more-project-setup)
    - [Creating our main HTML](#creating-our-main-html)
    - [Some basic starter content](#some-basic-starter-content)
    - [Updating our main route](#updating-our-main-route)
    - [Background on __dirname](#background-on-dirname)
    - [Additional reading](#additional-reading)
- [Part 5: Defining our application](#part-5-defining-our-application)

---

## Part 1: Using npm for dependency management
node.js and npm go hand in hand with frontend, backend, and full-stack Javascript development. Nowadays, they're considered default knowledge requirements in most real-world Javascript projects. In this section, we'll review exactly what node.js and npm are and how they're used to build robust websites without having to build everything from scrath. This is done by utilizing the open-source community and its adoption of node.js and npm as a shared standard for package development, production, sharing, and inclusion in any given project.

### node.js overview
So what is node.js? 

In order to fully understand this, there's a little bit of foundational Javascript history to wrap your head around. Javascript historically was considered a language that could (and should) only be run in the web browser. This served its purpose for a very long time, and resulted in some very light code that ran incredibly fast and accomplished incredibly complex tasks in very short periods of time. In short: Javascript became a very performant scripting language.

#### Enter node.js
The concept behind node.js was to take this highly perfomant scripting language, and give it a wrapper (that is not the web browser) to execute Javascript without requiring a browser while also providing access to the lower-level machine that is typically reserved for more traditional server-side languages.

This allowed Javascript to access the file system, to run an HTTP server to accept its own web requests, and to perform command-line triggered tasks locally on the machine. For example, you could create a single project that houses an HTTP server to accept requests at all applicable routes, has some command-line executed Javascript tasks to convert your LESS to CSS... _**all with just Javascript**_!!!

This is just a high-level explanation of what node.js is used for, but it only scratches the surface. In a "quick start" scenario, the real power of node.js comes with its counterpart [npm](#npm-overview).

### npm overview
npm is the "node package manager". It is a node.js provided command line tool. This command line tool allows you to add a configuration file to your project called `package.json` that defines some basic info about your Javascript project like the name, version, author, etc. However, the key point here is that it also allows you to add externally hosted dependencies that get pulled down from the npm package registry to be used directly in your project.

#### npm init
The easiest way to create the `package.json` is in the command line from your project directory.

This is done pretty easily in Visual Studio Code as long as you have [Jun Han's Terminal extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal) for Visual Studio Code installed.

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

--- 

## Part 2: Using open-source npm packages in your code
As mentioned before, the real benefit of npm in the case of Javascript development is that you can simply manage open-sourced projects and resources that other people have developed. There are two ways to include these dependencies in your project: with and without saving the dependency to your `package.json`. I suggest always saving your dependecies to your `package.json`, but I'll demonstrate both.

### Installing dependencies and saving to package.json
The basic command to install a package dependency is `npm install package-name`. This is referencing the name of the package as published on the [npm registry](https://www.npmjs.com/). The addition of the `--save` flag to this command will ensure that this dependency is stored in our `package.json`.

### Installing express
Using this knowledge, we'll be installing a single dependency for this example project: `express`. We'll get to what this package allows us to do at a later point in time, but for now, simply run `npm install express --save` in the Visual Studio Code terminal.

After running this command, you should see a new directory in your project folder called `node_modules`. This is the location that npm installs project dependencies. If that's there, you've successfully installed your first dependency!

### The require method
Before we actually use this new dependency, it's important to understand _how_ these dependencies are included in your project code.

As mentioned earlier on, node.js exposes to Javascript some previously unavailable functionality like access to the file system. This is actually incredibly useful in using our npm dependencies. There is a super complicated manner in which we could use this filesystem access to look into the `node_modules` directory and locate the `express` files we need in our project and eventually – after dozens of lines of code – we'd have access to the functions and classes included there.

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

--- 

## Part 3: Express
According to the Express website, it is a "fast, unopinionated, minimalist web framework for Node.js". All this means is that the creators of Express have developed a framework that houses all of the resources you'd need to build and serve your own web application. This includes – but is not limited to – a lot of the functionality traditionally handled by a specific HTTP Server like [Apache](https://httpd.apache.org/) or [Nginx](https://www.nginx.com/). The good news is: learning how to use express doesn't require any prerequisite knowlege of how these HTTP Servers typically work. However, it's good to lay down some foundational knowledge.

### HTTP Server overview
HTTP is the abbreviation of "HyperText Transfer Protocol". For the sake of our upcoming examples, it's not completely necessary to fully understand what a "protocol" is other than that it's a sort of a set of guidelines around how two separate pieces of software communicate with each other. The HTTP Server is the implementation of the "HyperText Transfer" protocol in a piece of software. 

You may recognize the term "HyperText" from HTML (HyperText Markup Language). With that little bit of background, it's a short hop to deducing that HTTP is the implementation of a protocol that allows a web request to return website content. The protocol specifies how the information must be requested and how the responses are formed, so we have two important actors here: the HTTP Client (well known as Browser) and the HTTP Server.

Some common "HTTP Clients" are Firefox, Chrome, and Safari. There is also an extension for Google Chrome that we'll be using in later exercises called [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) and an associated companion extension called [Postman Interceptor](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo). Together, these extensions act as a free-standing HTTP Client, so you can send an HTTP request and view its response without going to a URL in a web browser directly.

### The Client/Server Relationship
In short terms, every time that you open your browser (HTTP Client) and you write some address like: [http://google.com](http://google.com) and hit Enter, the browser is connecting to the HTTP server behind http://google.com, the server will interpret the main request and then provide the appropriate response back your HTTP Client (web browser). The HTTP Client is then responsible for doing something with this response.

This relationship can be boiled down pretty plainly as what I like to call a "question and answer system". There are number of "questions" that an HTTP Client can ask an HTTP Server, but the most common you see when browsing the web is: "Is there any content available at this web address?" This is known as a `GET` request.

Using the same example of the web browser, when you type in `google.com` in your address bar and hit `enter`, a couple of things take place. 

- The web browser (HTTP Client) sends out a question: "Is there any content available at the web address `google.com`?" in the for of a HTTP `GET` request
- Some voodoo happens called a `DNS lookup` (we'll get there eventually) that basically is just a way for the internet to figure out what server has the listening HTTP Server for a given website
- This "question" (HTTP GET Request) is then delivered to the HTTP Server in charge of `google.com`
- Once this request reaches the HTTP Server, the HTTP Server follows a set of rules (defined by Google's engineering team) for what content to deliver back when this web address is requested
- The HTTP Server sends this content back to the HTTP Client
- In the case of a web browser, this content is then parsed and rendered as the web page that you see

#### Important distinction
One important thing to note is that an HTTP Server is not restricted to returning HTML content. In fact, an HTTP Server is also responsible for returning images, Javascript files, CSS files, etc. In fact when the HTML for a web page is sent to a web browser, every `<script>`, `<link>`, and `<img>` tag also results in a separate HTTP GET request to get the content for those files as well. 

### Request methods
There is a pretty long list of what types of "questions" an HTTP Client can ask an HTTP Server. The way that the HTTP Client tells the HTTP Server what type of question it's asking is through something called an [HTTP Request Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). We've briefly covered the `GET` request method, but a more detailed list of the most commonly used request methods is as follows.

**GET**: A request for the content/data at a specific web address. The HTTP Client should only _**retrieve**_ content when it receives a GET request

**POST**: A request to submit some data to the HTTP Server; this is most commonly used in scenarios such as form submissions

**PUT**: A request for the HTTP Server to update some existing data; this is also used in form submission, but when editing (rather than creating) data

**DELETE**: A request for the HTTP Server to delete some existing data

### Status codes
So, how does an HTTP Client know the answer to the question it asks?

The HTTP protocol includes as part of its rules the concept of [HTTP Status Codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). These status codes are a set of pre-determined, short form "answers" to the questions an HTTP Client might ask. This is the way that the HTTP Server tells the HTTP Client whether the processing of the request was successful or not, whether the file they're looking for exists, even if the user doesn't have the right permissions to view a specific file. These status codes are 3 digit numbers and are categorized by the number in the `hundreds` place of the status code.

They are categorized like so:

**1XX**: Informational; not really used in web development at all

**2XX**: Successful; the web address had some content, and it's was successfully delivered

**3XX**: Redirection; the HTTP Server has determined that the content you're looking for is served at another web address (type in `chrome.google.com` and look at the address after the web page renders...)

**4XX**: Client Error; the HTTP Server has determined that there's an error in the request sent by the HTTP Client (most commonly seen example is the `404: Not Found` status code, which means that content could not be found at the requested web address)

**5XX**: Server Error; the HTTP Server encountered an error when processing the request

### How this all applies to Express
Since Express is a "web framework", it takes responsibility for some of the tasks traditionally handled by a dedicated HTTP Server. It's finally time to step through what our Express example from earlier is actually doing... but just a portion of it.

```javascript
const app = express();

app.get('/', (request, response) => {
    response.send('I just configured a web server!');
});
```

### The breakdown
In this code snippet, we first initialize Express and store the result in a variable called `app`.

Immediately after that, we start the process of configuring the HTTP Server. We use a method called `get` that is made available by Express. This method represents a `request method`. 

The method takes two arguments: the relative path of the request you're responding to and a callback method with the logic of how to respond.

Express passes to this callback method two arguments: the original request object and a response object with a number of helper methods to send the response back to the HTTP Client.

We use this `response` object's `send` method to send some text back to the HTTP Client. The `send` method implies a `200` status code, which tells the HTTP Client everything was successful.

_And **that's** how we configured our own web server!!!_

--- 

### Additional reading

[Express:Request](http://expressjs.com/en/4x/api.html#reqhttp://expressjs.com/en/4x/api.html#req)

[Express:Response](http://expressjs.com/en/4x/api.html#reshttp://expressjs.com/en/4x/api.html#res)

[Basic Routing in Express](http://expressjs.com/en/starter/basic-routing.htmlhttp://expressjs.com/en/starter/basic-routing.html)

## Part 4: Extending our application
So, let's stop messing with this plain text stuff, and return a web page!

### More project setup
Before we go too far down this rabbit hole, let's do some setup to make sure our project is organized. Firstly, in your project folder, create a directory called `src`. This will be the source code for our website. All of the HTML, images, CSS, and Javascript that will run in the browser will live here.

With that said, we should probably create folders for each of those as well. Inside of the `src` folder, create four more folders named `css`, `img`, `js`, and `views` respectively.

**css**: This will house our CSS files

**img**: This will house our images

**js**: This will house our site Javascript

**views**: This will house our HTML

### Creating our main HTML
Inside of the `src/views` folder create a file and name it `index.html`. This is going to be the HTML for our website's main page.

A simple shortcut to stub out an HTML page in VSCode is to open your HTML file, type `html:5` and hit the `tab` key.

This should give you something that looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### Some basic starter content
We're not going to go too far with this file just yet. For now, we'll add the following to the `<body>` of the HTML file.

```html
<h1>I'm serving HTML with Express!</h1>
```

Save the file, and we'll move on to wire this thing up!

### Updating our main route
For this portion, we need to re-visit our `index.js` file. We already have a functioning callback for a `GET` request on our website. However, it's sending plain text. What we want to do is send our new HTML file instead of plain text. In the same way that Express made the `response.send()` method available to us to send plain text, we can use the `response.sendFile()` method to send a file.

Replace this line:

```javascript
response.send('I just configured a webserver!');
```

With this:

```javascript
response.sendFile(__dirname + '/src/views/index.html');
```

Save this file and restart your node process. You can do this by hitting `ctrl + c` in the terminal, then re-running `node index.js`.

Once this process has started up again, and you see the `App is listening on localhost:3000...` message, you can visit [http://localhost:3000](http://localhost:3000) in your browser, and you should see your new HTML in action!

#### Background on __dirname
As I'm sure you've noticed, we're providing a concatenated string as our only argument to `response.sendFile()`. But there's something weird about this string: it's using a random variable called `__dirname`. We never created it, so what is it?

**__dirname** is a variable that Node.js makes available to our application to reference the directory on the file system that the current Javascript file live in. So, when we run `node index.js`, a variable is created in the background with the value of `/the/path/to/your/project/folder`. In my case, this happens to be `/Users/blakewilliams/development/intro-to-real-js`, but yours will most certainly be completely different.

Using this variable, we are able to tell `sendFile()` where to look for the file I want to send as my response. This is very useful in larger applications especially, but for now it's just an extra tidbit of information.

---

## Part 5: Defining our application
Coming soon...

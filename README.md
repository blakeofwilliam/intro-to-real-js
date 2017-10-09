# Intro to real Javascript
This is a basic project to demonstrate a more common real-world workflow for Javascript development on both the client and server side.

## Table of contents
- [Part 0: Setting up your machine for development](#part-0-setting-up-your-machine-for-development)
    - [Applications & Extensions](#applications-extensions)
    - [Command line tools](#command-line-tools)
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
    - [Application overview](#application-overview)
    - [The tech stack](#the-tech-stack)
- [Part 6: Setting up twig.js](#part-6-setting-up-twigjs)
    - [Making twig.js available to our Express app](#making-twigjs-available-to-our-express-app)
- [Part 7: The power of templates and view engines](#part-7-the-power-of-templates-and-view-engines)
    - [Twig loops](#twig-loops)
    - [Twig extends](#twig-extends)
- [Part 8: Creating our base.twig file](#part-8-creating-our-basetwig-file)
    - [Defining extendable blocks](#defining-extendable-blocks)
    - [Extending our new base.twig file](#extending-our-new-basetwig-file)
    - [Rendering our new home page](#rendering-our-new-home-page)
    - [Checking our work](#checking-our-work)
- [Part 9: Using nodemon](#part-9-using-nodemon)
    - [Installing global npm dependencies](#installing-global-npm-dependencies)
- [Part 10: Adding another page](#part-10-adding-another-page)
    - [The new thread page](#the-new-thread-page)
    - [Adding the new thread route](#adding-the-new-thread-route)
- [Part 11: Adding yet another page](#part-11-adding-yet-another-page)
    - [The solution](#the-solution)
- [Part 12: Dynamic routes](#part-12-dynamic-routes)
    - [Adding a path parameter](#adding-a-path-parameter)
    - [Creating our thread detail page](#creating-our-thread-detail-page)
    - [The lifecycle of path parameters](#the-lifecycle-of-path-parameters)
- [Part 13: Building our navigation](#part-13-building-our-navigation)
    - [Twig includes](#twig-includes)
    - [Creating the navigation partial](#creating-the-navigation-partial)
    - [Including the navigation partial](#including-the-navigation-partial)
- [Part 14: Making our navigation data driven](#part-14-making-our-navigation-data-driven)
    - [Twig for loops](#twig-for-loops)
    - [Creating our navigation data set](#creating-our-navigation-data-set)
    - [Writing a buildContext helper method](#writing-a-buildcontext-helper-method)
    - [Using our helper method when rendering](#using-our-helper-method-when-rendering)
    - [Updating the navigation.twig to use the context](#updating-the-navigationtwig-to-use-the-context)
- [Part 15: Starting to style our pages](#part-15-starting-to-style-our-pages)
    - [Enabling static assets](#enabling-static-assets)
    - [Adding CSS to our base.twig](#adding-css-to-our-basetwig)
- [Part 16: Setting up our database](#part-16-setting-up-our-database)
    - [Docker overview](#docker-overview)
    - [Configuring our docker-compose.yml file](#configuring-our-docker-composeyml-file)
    - [Testing our node app in Docker](#testing-our-node-app-in-docker)
    - [Adding MongoDB to our Docker environment](#adding-docker-to-our-docker-environment)
- [Part 17: MongoDB](#part-17-mongodb)
    - [Configuring a connection in Robo 3T](#configuring-a-connection-in-robo-3t)
    - [MongoDB overview](#mongodb-review)
    - [Adding the MongoDB package as a dependency](#adding-the-mongodb-package-as-a-dependency)
    - [Adding some test data](#adding-some-test-data)
- [Part 18: Creating our first Javascript class](#part-18-creating-our-first-javascript-class)
    - [Stubbing out our MongoDB class](#stubbing-out-our-mongodb-class)
    - [Instantiating our class](#instantiating-our-class)
    - [The new keyword](#the-new-keyword)
- [Part 19: Demystifying classes](#part-19-demystifying-classes)
    - [Instance scope](#instance-scope)
    - [Reviewing our MongoDB class](#reviewing-our-mongodb-class)
- [Part 20: Writing our first custom class function](#part-20-writing-our-first-custom-class-function)
    - [The Docker Compose links property](#the-docker-compose-links-property)
    - [Adding our connection string url in our constructor](#adding-our-connection-string-url-in-our-constructor)
    - [Stubbing our connect function](#stubbing-our-connect-function)
    - [Intro to Promises](#intro-to-promises)
    - [Finally writing our connect function](#finally-writing-our-connect-function)
- [Part 21: Reading data](#part-21-reading-data)

---

## Part 0: Setting up your machine for development
Before we start developing anything, we need to install some applications and command line tools.

### Applications & Extensions
For code editing, we'll be using [Visual Studio Code](https://code.visualstudio.com/download). Download and install it, start it up to make sure it's working, and then install the following list of Extensions for VSCode.

- [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal)
- [Twig](https://marketplace.visualstudio.com/items?itemName=whatwedo.twig)

We'll also be using two Chrome Extensions called [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en-US) and [Postman Interceptor](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en-US). Install both of those through the Chrome Web Store.

### Command line tools
The top level tool we'll be using in the command line (Terminal) will be [Homebrew](https://brew.sh/). Run the command on the Homebrew website – in the Terminal – to Install Homebrew.

Once installed, use `brew install node` to install Node.js and `npm`. Be sure to run both `which node` and `which npm` after the install to ensure they were successfully installed.

With all of that done, you should be ready to start developing!!!

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


### Additional reading

[Express:Request](http://expressjs.com/en/4x/api.html#req)

[Express:Response](http://expressjs.com/en/4x/api.html#res)

[Basic Routing in Express](http://expressjs.com/en/starter/basic-routing.html)

---

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
Now that we've got some basic prerequisites out of the way for our web app, we can start to discuss what we're going to build.

### Application overview
We're going to build a basic forum. This will allow for users to create an account, view existing threads in the forum, add comments, and create their own threads. This may sound like a lot but it can be broken down pretty simply.

Here's what we'll need to accomplish all of this:

- Four basic pages
    - A home page with login and sign up forms
    - A thread list page that will list out all active threads in the forum
    - A thread detail page that will list all comments in a specific thread and allow users to add comments to the thread
    - A "new thread" page with a form for creating a new thread
- An HTTP Server – which we've already started – that defines the rules for all of our website's routes (including the routes we'll use to fetch thread and user info)
- A database to store users, passwords, threads, and comments (we will cover this in great detail later, so don't worry if this sounds intimidating)

### The tech stack
**basic pages**: we'll be using basic CSS, and Javascript, as well as an HTML templating language called [twig.js](https://github.com/twigjs/twig.js/wiki). Twig will allow us to write some very dynamic HTML templates to support the thread list and thread detail pages with a single template each, leveraging our templates to fill in the content for a given thread ID without needed a specific HTML page for each. This will become much more clear once we get into it.

**HTTP Server**: as you may already know, we'll be using Node.js and Express

**database**: we'll be using a technology we've yet to discuss called [MongoDB](https://www.mongodb.com/)

**orchestration**: we'll be using a tool called [Docker](https://www.docker.com/) for something called "app orchestration". This will allow us to easily organize how the different parts of our application talk to each other.

_Don't worry too much about the specifics of how we'll be using these technologies to accomplish the task at hand or – even what they are – just yet. The implementation of each feature and technology will be covered pretty extensively... **starting with the next section.**_

---

## Part 6: Setting up twig.js
Before we dig in, be sure to install the [Twig](https://marketplace.visualstudio.com/items?itemName=whatwedo.twig) extension for Visual Studio code.

We'll circle back to what Twig is and how we'll use it in a little bit, but for now let's get twig added as a dependency and wired up to our express app.

### Making twig.js available to our Express app
As referenced in the [twig.js docs](https://github.com/twigjs/twig.js/wiki#appjs), it's relatively easy to register twig.js as your application's template engine. It's basically done in three basic parts.

#### Add the twig dependency to your project
This part should be starting to get familiar. It's a pretty common task in modern javascript development. In the terminal, type the following, and hit `enter`.

```bash
npm install twig --save
```

#### Configure your app to use twig as the view engine
In order to use twig as our app's `view engine`, we need to configure our application a little using an Express method called `set`. The `set` method takes two arguments: the name of the configuration option, and the value of the configuration option.

For our case, we only need to set the following two config options:

**views**: the location of our `views` directory (the location of our template files); for this config option, we'll be leveraging the `__dirname` variable again

**view engine**: the name of the npm package that will act as our "view engine"; this will be `twig`

```javascript
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');
```

#### Update our index.html to be a twig file and render it
Now that we've registered our view engine, we can change the extension of our existing `index.html` file in the `src/views` directory. Right click on this file and choose the `Rename` option. Rename the file to `index.twig`. Eventually, this new file extension will make some really nice add-ons to HTML available to us. For now, we'll test that everything is working by rendering this file as-is.

##### Rendering our template file
In our `index.js` file, we already have a single route that is using the `response.sendFile(...)` method to send the `index.html` file that we just renamed. Since we renamed it, that file is no longer available to send... and it's a `?twig?` file. However, we have registered a view engine that is able to render Twig files. We just need to update our existing route to render our new `index.twig` file instead of sending our old `index.html` file.

**Replace this line:**

```javascript
response.sendFile(__dirname + '/src/views/index.html');
```

**With this:**

```javascript
response.render('index');
```

Since we've registered our `view engine` (twig) and the location of our `views` (__dirname + '/src/views') without application's `set` method, all we need to do with our response is call `response.render(...)`. This method takes a single argument: the name of the twig file we'd like to render (without the `.twig` extension). It then hadles the task of parsing the file, getting the HTML output and calling `response.send()` on our behalf.

Without having changed the content since renaming our old `index.html` file, this may seem kind of pointless, but I promise, this will pay off in the long run.

#### Test our changes
After saving the changes to your `index.js` file, restart your `node` process. You can do this in the terminal by hitting `ctrl + c` then re-running `node index.js`.

Once this process has started up again, and you see the `App is listening on localhost:3000...` message, you can visit [http://localhost:3000](http://localhost:3000) in your browser, and you should see the same HTML you were seeing before... But this time, it's rendered by TWIG!!!

---

## Part 7: The power of templates and view engines
So, what exactly is the benefit of using templates and a view engine?

Simply put, you'll never have to write the same HTML twice... ever! Twig as a view engine allows us to write some HTML, and place some "placeholders" for either variables that our application will be able to pass our template at render time, or even entire other blocks of HTML with their own variable placeholders.

It also introduces to HTML the concept of **conditions** and **loops**.

### Twig loops
This means – for example – that you can provide your template an array of navigation items that looks like this:

```javascript
let nav = [{
    text: 'Home',
    url: '/'
}, {
    text: 'New thread',
    url: '/new-thread'
}];
```

And – in your template file – do something like this:

```twig
<ul class="navigation">
    {% for navItem in nav %}
    <li>
        <a href="{{ navItem.url }}">{{ navItem.text }}</a>
    </li>
    {% endfor %}
</ul>
```

Don't worry so much about the syntax, but try to get your head around what this actually does. It allows us to – with an inline `for` loop – iterate over each item in the `nav` array, and render an `<li>` for each of them.

Hopefully it's obvious how much time this can save when writing the HTML for your application.

### Twig extends
The concept of `extends` in Twig takes the idea of not repeating the same code over and over to a whole new level. In a multi-page application, you're likely to have a good number of HTML pages. Each of these pages has it's own `<!doctype>`, it's own `<head>` tag including the same `<link>` tags for CSS, plus a `<body>` tag, maybe even the same `<nav>` element.

What if you could create a "base" HTML file that organized all of this repeated code, and simply left a placeholder for the content of any page that wanted to "adopt" this HTML as a "wrapper"... **That** is what Twig's `extends` directive does.

You start with a file like this:

`base.twig`

```twig
<!doctype>
<html>
    <head>
        <title>{% block title %}{% endblock %}</title>
        <link rel="stylesheet" href="/src/main.css" type="text/css" />
    </head>
    <body>
        {% block content %}{% endblock %}
    </body>
</html>
```

This file acts as your "base" file for any page. As you can see, there are a couple of named `{% block X %}{% endblock %}` placeholders scattered throughout the HTML. These can be defined by another file that `extends` this base Twig template.

This looks like this:

`home.twig`

```twig
{% extends 'base.twig' %}

{% block title %}Home Page{% endblock %}

{% block content %}
    <h1>Welcome to my home page!</h1>
{% endblock %}
```

`about.twig`

```twig
{% extends 'base.twig' %}

{% block title %}About Page{% endblock %}

{% block content %}
    <h1>Welcome to my about page!</h1>
{% endblock %}
```

As you can see, we dont' have to re-declare the `<html>`, `<head>`, and `<body>` tags. They already exist in the `base.twig` file that's being extended. Once that's done, all that's required is that we add content to the `title` and `content` blocks that the `base.twig` file declares.

This means that our pages don't need to re-define what a basic HTML page looks like in our app. It just extends our `base` template. And if anything about this `base` file changes, it's propogated throughout all of the pages that `extends` it.

The **_FUTURE_**!!!

---

## Part 8: Creating our base.twig file
From the previous example, you might be able to guess that we already have most of what we'd need for our `base.twig` file. It happens to be in the `index.twig` file we created earlier. All we need to do is rename the file, and create our `block` placeholders for content that will be defined by other templates that extend our `base.twig` file.

The renaming is the easy part. Just right click on `src/views/index.twig` and choose `Rename`. Change the name of the file to `base.twig`. Now on to preparing this file to be extended.

### Defining extendable blocks
The first thing we should think about is what we want to be extendable, and what we want to be constant throughout all of the pages in our app. It's safe to assume – as a starting point – that everything except for the page content and the content of the `<title>` tag in the `<head>` of our file will be shared.

#### Block syntax breakdown
The syntax of most twig keywords is to use curly brackts with percent signs as the start and stop of a twig statement (`{% keyword argument %}`). In this case, the `keyword` is `block`, and the only argument it needs is a name for the block (so that extending templates can reference this block directly when declaring content).

The second part of most keyword-based twig statements is an `end` statement. This is effectively a simple way to tell twig you're done with this twig statement. It usually follows the pattern of `end` followed by the keyword you used in your opening statement (in this case `block`), which gives us the `{% endblock %}` statement.

The content inside of the `block` is our default content. So, if a template extends our `base.twig` and doesn't declare any content for the named block, the default text will be used.

#### Adding our blocks
With that said, update your `<title>` tag in `base.twig` to look like this:

```twig
<title>{% block title %}Forum Madness{% endblock %}</title>
```

And replace all content inside of your `<body>` tag to look like this:

```twig
{% block content %}{% endblock %}
```

That's all we have to do. You should now have a `base.twig` file that looks like this:

```twig
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{% block title %}{% endblock %}</title>
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>
```

### Extending our new base.twig file
Now that we've stubbed out a base template, we can extend it to create our new home page.

Create a new folder in `src/views` called `pages`. Inside of this folder create a new file called `home.twig`.

Add the following code to your `home.twig` file:

```twig
{% extends 'base.twig' %}

{% block title %}Forum Madness - Home{% endblock %}

{% block content %}
    <h1>Welcome to Forum Madness!!!</h1>
{% endblock %}
```

That's all we have to do to create a fully compliant HTML file now!!! The `home.twig` file extends the basic template of the `base.twig` file, and simply declares the unique content of this page in the pre-defined named `blocks` that the `base.twig` makes available to it. In this case, the `title` and `content` of the page.

### Rendering our new home page
So, now we have to render this thing! This part is pretty simple, actually. Since we've already configured our view engine to render twig files, we just need to update the file that's being rendered for the `/` route.

Update this line in your `index.js`:

```javascript
response.render('index');
```

To look like this:

```javascript
response.render('pages/home');
```

#### Some more context
Since we configured our `views` option earlier to point to `__dirname + '/src/views'`, this is the base point of reference for our view engine (twig). Our new `home.twig` file, however, is located at `/src/views/pages/home.twig`. For this reason, we need to give our render method a little more context about the file it's rendering. More specifically, we need to give it the path to the file relative to the `views` directory that we defined earlier.

This is why we are calling `response.render(...)` with `pages/home` instead of just `home`.

### Checking our work
After saving the changes to your `index.js` file, restart your `node` process. You can do this in the terminal by hitting `ctrl + c` then re-running `node index.js`.

Once this process has started up again, and you see the `App is listening on localhost:3000...` message, you can visit [http://localhost:3000](http://localhost:3000) in your browser, and you should now see a page with a title of `Forum Madness - Home`, and page content of `Welcome to Forum Madness!!!`... If you inspect this page, you'll see that all of the scaffolding for this page is still there. The `<!doctype>`, `<html>`, `<head>`, and `<body>` tags are all in place as your would expect.

The difference this time is, they came from our `base.twig` file via twig `extends`!

In the next section, we'll start to see how much time this saves us when we add more pages to our application.

---

## Part 9: Using nodemon
So, I'm sure by now you're probably pretty annoyed with having to restart your node process every time you make a change. You're not the only one...

Luckily, someone in the open-source community has created a tool to solve this problem, and it's called `nodemon`.

Nodemon allows you to start your node process and it will automatically update every time a file changes that is referenced by your node app.

### Installing global npm dependencies
Up until now, we've added project dependencies using `npm`. However, nodemon is a dependency that we don't necessarily want to add to our project. We just want it to be globally available on the computer that's running our application. In the same way that we extended the `npm install package-name` code with `--save` to save a dependency to our project, `npm` offers the `-g` flag to install a dependency globally on your machine.

Using the same format as before – but with the `-g` flag instead of the `--save` flag – we can install nodemon using the following code:

```bash
npm install nodemon -g
```

This will add a new CLI (command line interface) to our machine. You may not know it, but you've been using CLIs this whole time. Any program that is available via the terminal is known as a Command Line Interface. So, `npm` and `node` are both CLIs.

Once you've run the `npm install` code for nodemon, you can kill your `node` process using `ctrl + c` in the terminal, and this time execut `nodemon index.js` in the terminal.

Once this process has started up again, and you see the `App is listening on localhost:3000...` message, you can visit [http://localhost:3000](http://localhost:3000) in your browser, and you should see the exact same page as before.

The difference this time is that nodemon will now monitor your `index.js` file for changes. Any time we save the `index.js` file from now on, the app should auto-update without needing to be restarted.

---

## Part 10: Adding another page
Now that we've set up a base.twig file to act as a wrapper for the rest of our pages, we can extend it for our new pages and add some new routes. The first of these will be pretty simple, since it's not very different from our `/` route.

### The new thread page
This route will be responsible for rendering the "new thread" page. For this reason, before we add the route to our `index.js` file, we'll need to create a new twig template for this page in our `views` directory. In the `src/views/pages` folder, create a new file, and name it `new-thread.twig`.

Add the following code to your new twig file:

```twig
{% extends 'base.twig' %}

{% block title %}Forum Madness - New Thread{% endblock %}

{% block content %}
    <h1>Create new thread</h1>
    <p>The form for new threads will go here eventually...</p>
{% endblock %}
```

This should look pretty familiar by now. It's just the same type of extension we did for the `home.twig` file. The only difference is the content.

#### Adding the new thread route
Now that you have a new template for the new thread page, you can add a route to your `index.js`. After the existing route in your `index.js` file, add the following code:

```javascript
app.get('/new-thread', (request, response) => {
    response.render('pages/new-thread');
});
```

Save the file and wait for `nodemon` to restart your app (no need to do this manually anymore).

After `nodemon` finishes, you should see this output in your terminal:

```
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
App is listening on localhost:3000...
```

You should now be able to go to both [http://localhost:3000/](http://localhost:3000/) AND [http://localhost:3000/new-thread](http://localhost:3000/new-thread). Ensure that the content for these two pages is different.

If so, you've just configured the second route for your application!!!

---

## Part 11: Adding yet another page
We've gone through this a few times now, so I'd suggest before reading this section in full that you attempt the following task first. I'll detail how it's done after, but if you're up for the challenge attempt the following...

- Create a `threads.twig` page template that `extends` `base.twig`
- Add a route for the `/threads` path that renders this new `threads.twig` page template

### The solution
In the `src/views/pages` folder, create a file named `threads.twig` and add the following content to this file:

```twig
{% extends 'base.twig' %}

{% block title %}Forum Madness - Threads{% endblock %}

{% block content %}
    <h1>Threads</h1>
    <p>The list of threads will go here eventually...</p>
{% endblock %}
```

Save this file.

In your `index.js` file, after your `/new-thread` route, add the following code:

```javascript
app.get('/threads', (request, response) => {
    response.render('pages/threads');
});
```

Save this file, and wait for `nodemon` to restart your node process.

You should now be able to visit your new [http://localhost:3000/threads](http://localhost:3000/threads) page.

---

## Part 12: Dynamic routes
Before we add our final page, we need to cover a new concept in how Express handles routing. This is the idea of `dynamic routes`. All this means is a route that has a placeholder for any or all of its path.

Take the example of our thread detail page. When a user clicks on an item in our threads list (once it's created in the `/threads` page), the expectation is that it will link to a page with a path that looks something like `/threads/1234` where `1234` is the ID of the thread we want to show the detail for.

This can get pretty tedious if we had to manually create a new route for every ID. Especially if we are allowing users to create new threads at will. Luckily, Express has solved this problem for us.

### Adding a path parameter
The way that Express solves this problem is with something called `path paramenters`. The use of path parameters allows us to create named placeholders in our path that we can then use the value for in our route's callback. The only thing you need to do to create a path parameter is prepend the name of your parameter with a `:` in your path.

In our case, we'll be using a path that looks something like this: `/threads/:id`. What this does is create a path paramenter named `id` in the `request` object that's passed to our route's callback. This `id` property is actually added to a property called `request.params`. So, in our callback, if we want to access this `id` parameter, we can store the value of `request.params.id` in a variable and use it however we need to.

Let's do this now...

In the `index.js` file, after your `/threads` route, add the following code:

```javascript
app.get('/threads/:id', (request, response) => {
    const id = request.params.id;

    response.render('pages/thread-detail', { id: id });
});
```

Save the file. There's some new syntax in there, I know. We'll get to that in a minute.

However, if you visit `/threads/1234` right now, you might notice that the page is broken. It's giving you an Error. This is because we haven't created a template for the `pages/thread-detail` that we're rendering. Let's do this right quick.

### Creating our thread detail page
In the `src/views/pages` folder, create a file named `thread-detail.twig` that `extends` `base.twig`.

In the `content` `block`, add the following code:

```twig
<h1>You're viewing thread {{ id }}</h1>
<p>The details of this thread will eventually go here...</p>
```

Save the file.

I know, there's some new syntax here as well. We're about to get to that.

### The lifecycle of path parameters
As you may have noticed, a few things were different about this template and route. Firstly, we used this new `path parameter` idea.

However, we also passed a new argument to the `response.render(...)` method. This was an object that looked like this `{ id: id }`. Because we stored our `id` path parameter in a constant variable called `id`, this is just an object that contains a single property called `id` where the value is the value passed through our path parameter. This object, when passed as the second argument of our `response.render(...)` method, is known as the `context`. This context is a way for use to pass data to our twig template, and – wherever we want that data – render it inline as part of our page's content.

The way we did that in our twig file was to use `{{ id }}`. In twig templates, any time you wrap text in double curly brackets, it will look at the `context` object passed to the renderer, and replace this statement with the value of the context property with the same name. In this case, we passed `{ id: id }` as the `context` object.

If a user visits `/threads/1234`, then the `const id = request.params.id;` line will store `1234` in the `id` variable. This value then gets passed to the `response.render(...)` method in the `context` object – with the property name `id` – as the second argument. The template then uses `{{ id }}` to place the value `1234` in the template, dynamically at render time.

So, when visiting `/threads/1234`, you should see `You're viewing thread 1234` on the page. When visiting `/threads/5678` you should see `You're viewing thread 5678`. And so on...

But we're using **ONE ROUTE** for all IDs!!!

---

## Part 13: Building our navigation
Alright, we've built a bunch of placeholder pages. Now it's time to add some navigation to our application, so we can navigate to these pages from any page in our application. But, as with other sections, there's a little bit of prerequisite knowledge to get out of the way.

### Twig includes
One of the key fundamental principles that I like to follow when writing my code is to keep it as readable as possible. A lot of this is accomplished by keeping functions as short as possible, other parts are handled by writing comments to explain what's going on, but that's all in Javascript.

What about HTML? Typically, if you want an HTML page to have a bunch of different sections, all of the markup for those sections has to be in a single HTML file. This ends up making your HTML code somewhat hard to navigate. It's easy to lose your spot, and it's easy to update the wrong line or the wrong block of code entirely.

Twig – as you might expect by now – has a solution for this problem! It's the `include` keyword.

As we covered before, we can use a keyword in twig by wrapping it in curly brackets with percent signs inside. We've done this with the `block` keyword (`{% block title %}`) and with the `extends` keyword (`{% extends 'base.twig' %}`). In both of these scenarios, the keyword followed by an argument associated with the keyword. For `block`, it's the name of the block, and for `extends`, it's the name of the file you'd like to extend.

With the `include` keyword, we provide it the name of the file we'd like to include in another file (relative to `views` directory). This keyword allows us to break our HTML into "partials" (specific sections of an HTML page), and include them in other pages without having to write all of the HTML in a single file.

Let's put that concept in action for our navigation.

### Creating the navigation partial
In the `src/views` folder, create a new folder called `partials`. Inside of _that_ folder, create a new file named `navigation.twig`.

In the `navigation.twig` file, add the following HTML:

```twig
<nav class="forum-nav">
    <ul class="nav-items">
        <li class="nav-item">
            <a href="/">Home</a>
        </li>
        <li class="nav-item">
            <a href="/threads">Threads</a>
        </li>
        <li class="nav-item">
            <a href="/new-thread">
                <button class="nav-button">
                    New thread
                </button>
            </a>
        </li>
    </ul>
</nav>
```

Save this file.

### Including the navigation partial
Because our `include` keyword is expecting the twig template that we want to include _**relative to the views**_ folder, and we created a new folder for our partials, we'll need to provide it the argument of `partials/navigation`.

In your `base.twig` file – in the `<body>` tag, but before the `content` block – add the following line of code:

```twig
{% include 'partials/navigation.twig' %}
```

Save your `base.twig` file, and re-visit any page on your site.

Keeping in mind that we haven't written any CSS for our application yet, you should see your new navigation rendered on all of the pages in your application (with functional links). This is because every page we've created `extends` our `base.twig` file. So, we've only had to inlcude the `navigation.twig` file there, and it's inherited by all of them.

Pretty sweet, huh?!?!

---

## Part 14: Making our navigation data driven
Our navigation template is nice. It gives us a way to isolate that portion of our application and edit it in one place. But, believe it or not, there's still more repeat code than there should be. However, as usual, before we dig into fixing that, there's some prerequisite knowledge required to make it all make sense.

### Twig for loops
We've seen how twig allows us to isolate code for the purpose of reuse in multiple files, but what if we have a specific element that we want to render once for ever element in a data set? This is where the `for` keyword comes in handy.

The key difference between the `for` keyword and the others we've used so far is that the `for` keyword is also accompanied by the `in` keyword. This is pretty much _always_ going to be the case when using the `for` keyword. The basic syntax is `{% for item in dataSet %}...{% endfor %}` where `item` is a temporary variable name for each item in a data set and `dataSet` is the item you're iterating over with your `for` loop.

### Creating our navigation data set
Before we put this new knowledge to use, we first need to create a data set to iterate over. We're going to be using the `for` keyword to generate our navigation, so in the `index.js` file – after the `app.set()` calls and before your first route declaration – add the following code:

```javascript
const navigation = [
    {
        text: 'Home',
        type: 'link',
        url: '/'
    },
    {
        text: 'Threads',
        type: 'link',
        url: '/threads',
    },
    {
        text: 'New Thread',
        type: 'button',
        url: '/new-thread'
    }
];
```

This array of objects will be referenced in our template to dynamically generate our navigation's `<li>` and `<a>` tags. However, since we're passing a `context` to the `response.render(...)` method at least one time already, we'll probably need a helper function to ensure that this `navigation` variable is always added to the context.

Let's do that now.

### Writing a buildContext helper method
The helper method we'll need to accomplish this task will need to do a few different things.

- Declare a default context to be passed to the `response.render(...)` method
    - This will include our navigation, so that it will always be included in the context
- Accept any additions to the context from a specific route callback
- If additional context is not provided, just return the default context
- Otherwise, merge the default context with the passed additions to the context

With that out of the way, let's write it. After your `const navigation...` variable declaration, create a function called `buildContext` that accepts one argument called `ctx`.

Let's have this function perform the above tasks:

```javascript
function buildContext(ctx) {
    // define the default context for rendering
    let defaultContext = {
        navigation: navigation
    };

    if (!ctx) {
        // Return the defaultContext
        return defaultContext;
    }

    // merge the defaultContext and ctx into an empty object
    // then return it
    return Object.assign({}, defaultContext, ctx);
}
```

That's all we need for our helper function. Now let's use it.

### Using our helper method when rendering
Now that we have a helper function to handle our context, we'll need to make some changes to all of our routes.

#### Routes not currently passing a context
For all routes that don't currently pass a context to `response.render(...)`, we'll need to do two things:

- declare a variable called `context` where the value is the return value of `buildContext()`
- pass the new `context` variable to the `response.render(...)` method

I'll use the `/` route as an example, and you can handle the others that are not currently passing a context.

```javascript
app.get('/', (request, response) => {
    const context = buildContext();

    response.render('pages/home', context);
});
```

Since we're not providing any context information to the `buildContext(...)` method, it will simply return the `defaultContext`, which includes our navigation array.

#### Routes currently passing a context
For all routes currently passing a context (this should only be the `/threads/:id` route at this point), we'll need to do mostly the same thing, but with one extra step:

- declare a variable called `context` where the value is the return value of `buildContext(...)`
    - in this case, however, we need to pass the current object being passed to `response.render(...)` as the context to our `buildContext(...)` method
- pass the new `context` variable to the `response.render(...)` method

For the `/threads/:id`, this should look like this:

```javascript
app.get('/threads/:id', (request, response) => {
    const id = request.params.id;
    const context = buildContext({ id: id });

    response.render('pages/thread-detail', context);
});
```

Since we're providing additional context info to the method, the method will return a merged context object with both our default context's `navigation` property and our custom context's `id` property. This will allow our other behavior to continue working as well as give support for our upcoming navigation changes.

### Updating the navigation.twig to use the context
Now that we're passing our navigation array to our templates through the context, we can use this context property to loop through this array, and render an `<li>` for each object in the array.

Inside of the `<ul>` tag in your `navigation.twig` file, replace all of the content with the following code:

```twig
{% for item in navigation %}
    <li class="nav-item">
        {% if item.type == 'button' %}
        <button class="nav-button">
        {% endif %}

        <a href="{{ item.url }}">{{ item.text }}</a>

        {% if item.type == 'button' %}
        </button>
        {% endif %}
    </li>
{% endfor %}
```

#### How it works
This code is using the `for` keyword to loop through each `item` in the `navigation` context property. For each item, it renders an `<li>` item. Inside of this `<li>` tag, it does two checks to see if the `type` property of the `item` is `button`. If so, it renders opening and closing `<button>` tags. If the `type` property is not `button`, these will be ignored.

We will go into detail about the `if` keyword at a later point, but – for now – this should be enough to explain this new code.

Save your files, and re-visit your site. You should still see your navigation on all pages, however, this time it's data driven!

---

## Part 15: Starting to style our pages
I'm not going to get too crazy into explaining the CSS we're about to add just yet, because it's all pretty straight-forward.

In the `src/css` folder, create a file called `style.css` and add the following code:

```css
body {
    background: #F8F8F8;
    color: #96A6A4;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

* {
    box-sizing: border-box;
}

a {
    color: #D84B68;
    text-decoration: underline;
}

nav.forum-nav {
    background: white;
    width: 100%;
}

ul.nav-items {
    list-style: none;
    margin: 0;
    padding: 0;
}

li.nav-item {
    display: inline-block;
    list-style: none;
    padding: 0;
}

li.nav-item > a {
    color: #3E7C91;
    display: inline-block;
    padding: 15px;
    text-decoration: none;
}

li.nav-item > a:hover {
    background: #90BBC1;
    color: white;
}

li.nav-item.active > a,
li.nav-item.active > a:hover {
    background: #3E7C91;
    color: white;
    cursor: pointer;
}

li.nav-item > button.nav-button {
    background: #D84B68;
    border: none;
    border-radius: 4px;
    padding: 8px 15px;
    text-transform: uppercase;
}

button.nav-button > a {
    color: white;
    text-decoration: none;
}
```

This is just some basic styling for the body and navigation. Nothing super over-the-top here.

### Enabling static assets
In order to reference this CSS file, we'd normally enable a route for `/src/css/style.css` and use `response.sendFile(...)` to return the contents. However, we'll probably have more files show up in the future, and that can get pretty old pretty fast.

Luckily, Express thought of this one, too!

In the `index.js` file, after all of the route declarations, add the following code:

```javascript
app.use('/assets', express.static('src'));
```

This code uses the `app.use(...)` method. This method takes two arguments:

- a path for the type of "middleware" you'd like to use
- the actual middleware

All middleware is is a bit of code that binds specific behavior to your app without much configuration. In this case, we're using Express' build-in `static` middleware. The way this is configured is: we give it a directory that we'd like to server statically (meaning none of the files should be manipulated before being returned), and it will set up routes in the background for all of the files.

Since we're giving this static folder the `path` of `/assets`, we can basically replace `src` with `/assets` in the path to the file we'd like to use, and Express will route to the file. So, our CSS file will be included in our `base.twig` file at the path `/assets/css/style.css`. Using this sort of "rewrite" is a pretty common security measure to ensure that site visitors don't know the actual directory structure of your code.

### Adding CSS to our base.twig
This one's pretty easy. :)

In your `base.twig`, add the following code to the `<head>` tag:

```twig
<link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
```

That's it! Now we've wired up our CSS.

---

## Part 16: Setting up our database
Now that we've stubbed out a basic application, all we need to do is build out some functionality for our threads, comments, users, etc. However, in order to make all of that work, we first need a place to store all of that information. We'll be storing it in MongoDB, but in order to do some prep work for this application eventually running on a remote web server, we'll want to ensure that as much of our live setup is reflected in our local development setup as posible.

Part of this is making sure that connecting to our database is the same in both development and production. To replicate this setup, we'll be using something called [Docker](https://store.docker.com/editions/community/docker-ce-desktop-mac). We'll be covering what Docker is, and how we're going to use it, but before we do that go ahead and get Docker installed on your machine using the link provided.

After you've installed Docker, run the command `which docker` in your Terminal to ensure that Docker has been properly installed. You should see something like this printed out in the terminal `/usr/local/bin/docker`. This is just the location of Docker's CLI on your machine, and it means that Docker is properly installed, and you can move on.

### Docker overview
So, to start with a little bit of background, traditionally in a production application it's a good practice to have a single machine be responsible for a single portion of your application. This means that you'd have one machine running your Node.js app, another machine running your database, and the first would connect to the second whenever data needs to be read or written to the database.

The benefit of this setup is that if you need more resources for your database, you simply upgrade the database machine, and your Node.js machine can be left alone. The same applies to allocating resources to your Node.js machine.

This is all well and good, but we're running on a single computer (the one you own), so how do we accomplish the action of running these different parts of the application separately? We use Docker.

Docker is a `container management tool`. What's meant by this is that Docker allows you to configure a bunch of separate "containers" for different portions of your application. It also allows you to define a "base image" for this container to run on, and add the code from your project to the container, mimicking the behavior of a separate machine for each portion of your application.

Each "container" in your application is given its own IP address, and it has the ability to expose specific ports for requests coming from outside of the Docker environment. In our case, we're running our Node.js app on port `3000`. By default, once we "Dockerize" this portion of our application, we will no longer be able to access our app at `localhost:3000` unless we explicitely configure Docker to expose port `3000` on our Node.js container.

Some of this is a pretty high level explanation of the concepts of Docker, so don't worry if it's still a little fuzzy. We'll get a better picture of what's going on as we dig into configuring Docker.

### Configuring our docker-compose.yml file
Alright, so let's start to Dockerize our application. In the root of your project folder, create a new file called `docker-compose.yml`. This configuration is written in a language called YAML. It's a lot like JSON or a Javascript object, except it uses indented lines instead of curly braces to nest objects and properties. Don't worry too much about what this means, because once you see it, it will make sense.

In your `docker-compose.yml`, add the following code:

```yaml
version: '3'
services:
  node:
    image: node:alpine
    command: npm start
    ports:
      - 3000:3000
    volumes:
      - .:/usr/src/app
    working_dir: '/usr/src/app'
```

#### Configuration overview
So, what's this code do?

**version**: This is just a flag to tell docker what version of the docker-compose configuration we're using; the all have different support for specific features; `3` is the most recent

**services**: This is the name of a property that will house all of the configurations for the different portions of our application; each of our "services" will be run in its own "container"

**services.node**: This is the name of our first "service"; it will be responsible for kicking off our `nodemon index.js` command (which we've been doing manually up until now)

**services.node.image**: This is the name of the "base image" that we'd like to have our container based on; using a base image allows us to include by default the technology that a given service uses; in this case, we're using the [official node image](https://hub.docker.com/_/node/), which installs `node` and `npm` in our container, so that our application will run properly

**services.node.command**: This is the command used to start our Node.js application; when the container starts up, it will execute this command, so that our application is started right away; note that this is different from the `nodemon index.js` command we've been using... we'll get back to that in a minute.

**services.node.ports**: This is the part we went over before; in order to make port `3000` accessible outside of the container, we need to expose it to our machine using one of its ports; the format of this is `{machinePort}:{containerPort}` this `binds` all traffic going to the `machinePort` to the `containerPort` in such a way that when a request comes into `localhost:{machinePort}`, it's routed to `container:{containerPort}`... With this in mind, we could use `8000:3000`, and we would be able to access our application through `localhost:8000`; since our application is running on port `3000` inside of the container, and we'd be binding it to port `8000` outside of the container, the request would have to go to port `8000`

**services.node.volumes**: This is how we create "pointers" _inside_ the container to files _outside_ the container; the format is similar to the ports section, but the relationship is `{machinePath}:{containerPath}`; in this case `.` represents our project directory – more specifically, the directory that houses our `docker-compose.yml` file – and the `/usr/src/app` represents where we want the pointer to be created inside the container; the value for `{containerPath}` is arbitrary; if we used `/app`, then our project code would be accessible inside the container at `/app`; we're just using `/usr/src/app` because it's a pretty common path to use in examples;


_NOTE: be sure not to confuse the `{containerPath}` in this example with our `app.get(...)` path; these are two totally different concepts; in our `app.get(...)`, we're defining a path for our Node.js app to **listen** for; in our `docker-compose.yml` a service's `volumes` paths are referencing the **File System** itself_

**services.node.working_dir**: This tells our container where to navigate to on startup before running any commands; since we're creating a pointer to our project directory at `/usr/src/app`, this is the value we're providing here; this means that on startup, the container will first be scoped to our project directory (through the pointer it has locally) and **then** it will execute commands to start the application

I know all of that is a little dense, and there are a lot of new concepts in there, but let's take a break from all of that, save our `docker-compose.yml` file, kill any already running `nodemon` processes by opening the Terminal and hitting `ctrl + c`...

#### Before we can test
As you may have noticed, the `command` property in our `node` service configuration is set to `npm start`, but the command we've been using up until now is `nodemon index.js`... So, what is `npm start`?

In your `package.json`, you should see a property called `scripts`. This is set to an object. Currently, this should only contain a `test` property. This `scripts` property is a way for us to define common tasks that we run for our application and give them a corresponding `npm` command.

You might recall that, for the command we've been using (`nodemon index.js`), we used the `-g` flag to install `nodemon` globally on our machine. Unfortunately, our container will not have access to this tool. So, the best way to approach this problem is to now make `nodemon` a dependency of our project using the `--save` flag.

Execute `npm install nodemon --save` in the Terminal. This will install `nodemon` in our `node_modules` folder instead of globally on our machine.

Now, in the `scripts` object in `package.json`, we just need to add the following property before the `test` property:

```json
"start": "node_modules/.bin/nodemon index.js",
```

This might not look as easy as our `nodemon index.js`, but this is because any `npm` package that's installed as a dependency of your project that typically offers up a CLI – rather than being `required` in a JS file – is added to the `node_modules/.bin` directory. So, in order to use our project's local copy of `nodemon`, we need to reference it from `node_modules/.bin/nodemon`.

Now, if you run `npm start` in your Terminal, it's just a shortcut for `nodemon index.js`!

Phew...

Now we're ready to test this thing out...

### Testing our node app in Docker
Now that we've saved our file, we can see what this all looks like in action. In the Terminal execute the `docker-compose up` command.

It will  take a minute, but you should see some output that looks like this:

```bash
Creating network "introtorealjs_default" with the default driver
Pulling node (node:alpine)...
alpine: Pulling from library/node
88286f41530e: Pull complete
d0e8a23136b3: Pull complete
5ad5b12a980e: Pull complete
Digest: sha256:60cd58a7a2bd9fec161f53f8886e451f92db06b91f4f72d9188eeea040d195eb
Status: Downloaded newer image for node:alpine
Creating introtorealjs_node_1 ...
Creating introtorealjs_node_1
Attaching to introtorealjs_node_1
node_1   | npm info it worked if it ends with ok
node_1   | npm info using npm@5.3.0
node_1   | npm info using node@v8.6.0
node_1   | npm info lifecycle intro-to-real@1.0.0~prestart: intro-to-real@1.0.0
node_1   | npm info lifecycle intro-to-real@1.0.0~start: intro-to-real@1.0.0
node_1   |
node_1   | > intro-to-real@1.0.0 start /usr/src/app
node_1   | > nodemon index.js
node_1   |
node_1   | [nodemon] 1.12.1
node_1   | [nodemon] to restart at any time, enter `rs`
node_1   | [nodemon] watching: *.*
node_1   | [nodemon] starting `node index.js`
node_1   | App is listening on localhost:3000...
```

Once you see the `App is listening on localhost:3000...` message in the terminal, the app is running inside the container. Now you can test it out again in the browser. Everything should look the same. The key difference is that now our Node.js app is running in a Docker container that we configured ourselves!

If that's all looking good, let's move on to adding another container for our database: MongoDB.

### Adding MongoDB to our Docker environment
In the root of your project folder, create a new folder called `data`. Inside of that folder, create another folder called `db`.

In the `docker-compose.yml` – after the `node` service configuration, but indented to be nested inside of the `services` property – add the following service configuration:

```yaml
mongo:
  image: mongo:3.0
  ports:
    - 27017:27017
  volumes:
    - ./data/db:/data/db
```

There's much less configuration needed for this, since we're going to let the MongoDB use primarily defaults. The only thing we need to do is define what `image` we want to use (we're using the [official MongoDB 3.0 image](https://hub.docker.com/_/mongo/)), what `ports` we want to expose (by default, MongoDB starts up listening on port `27017`, so we're going to use that), and where to store the data that's written to our database (by default, MongoDB writes to `/data/db`, so we create a pointer inside the container that's mapped to `./data/db` which is the new folder(s) we just created in our project folder).

With all of that out of the way, save the `docker-compose.yml` file, and in the Terminal, hit `ctrl + c` to stop our Docker process.

Now run `docker-compose up` again in the Terminal.

You should see a bunch of crazy output again, and eventually the `App is listening on localhost:3000...`

If this is the case, we're good to go. We've configured our two containers. We'll revisit Docker as we take advantage of some of the key features it offers, but for now just pat yourself on the back for getting through one of the more dense sections so far!!!

---

## Part 17: MongoDB
In a second, we'll cover some basic MongoDB concepts, however, we'll need a MongoDB client that will allow us to connect to our MongoDB database, manage users and data, and see exactly what it is we're working with. That client is [Robo 3T](https://robomongo.org/download) (formerly Robomongo). Although MongoDB offers a pretty useful CLI that you can do pretty much everything from directly, having a proper user interface to view and manage your data is sometimes a little more convenient.

Once you've installed Robo 3T, open it, and we can configure our connection to MongoDB.

### Configuring a connection in Robo 3T
Once you open Robo 3T, you'll be prompted with a window titled `MongoDB Connections`. At the top of this window, there are a few links to perform some actions to manage your connections. Click `Create`. 

For the `Name` enter `Forum Madness`; and ensure that the `Address` boxes are populated with `localhost` and `27017`. Before clicking the `Save` button on the bottom right, click the `Test` button on the bottom left. This will ensure that the connection is configured properly. You should get a little popup window that says `Connected to localhost:27017` and `Access to database is available`. Click `Close`, then click `Save`.

You're connection is configured! Now you can click the `Connect` button to use your new database connection.

In the left hand side bar, you should see a little computer icon with `Forum Madness (1)` next to it. Below that should be a folder called `System`. Right click on the `Forum Madness (1)` label and choose `Create Database`.

For the `Database Name` enter `forum_madness` and click `Create`. You should now see a little "database" icon (looks like a stack of three metal pancakes) with the label `forum_madness`. You've just created your first MongoDB database!!! Easy, right?

Now we just need to create a new user, so that we can use our node app to connect to this new database. In the Terminal, run the command `mongo`. This will open a command prompt that allows us to administer more low-level aspects of our MongoDB database. You'll know the prompt opened properly if you see some random output and then an empty line with only a `>` on it where your cursor is.

Enter `use forum_madness`. This allows us to "open" our database with that name. Then run `db.createUser({ user: "fm_node", pwd: "fm_node", roles: ["dbAdmin", "dbOwner", "readWrite"]})`. This will create a new database user  with the username `fm_node` (this is NOT one of our site users, this is actually a MongoDB user that we'll use to connect to the database from our Node.js app), the password `fm_node`, and a specific set of permissions for what this user is allows to do to the database. We will circle back on this at some point, but for now if you run the `db.getUsers()` command, you should see your new user.

Hit `ctrl + c` to exit the prompt. You can also just run the `exit` command from the MongoDB prompt, and it will exit back to your normal terminal.

### MongoDB overview
MongoDB is a `noSQL Database`. This just means that it uses a different format of storage than a traditional `SQL` database. Traditional SQL databases use a `relational` table structure, where every type of data you want to store is in a `table`, and in order to form relationships between two tables, a lot of configuration is required. noSQL databases do away with this complexity by using a different approach to storing data. In the case of MongoDB, our data is broken up into `collections` and `documents`. The key part of this is the _**type**_ of document... It uses JSON (Javascript Object Notation) documents. What this means is that every `document` in our database is just a Javascript Object. And a collection is just a group of JSON `documents` that have the same type of data.

So, in our case, it would make sense to have a collection for `threads`, `comments`, and `users`, since these will all be expected to have different properties in their respective `documents`.

Another side effect of using a database that has a JSON-based `document` model is that it's basically a 1-to-1 relationship between the Javascript objects we'll be using in our Node.js code and the actual data in the database. Traditionally, with SQL databases, a good deal of manipulation and transformation was required to turn a SQL `record` (the SQL version of a `document`) into a JSON object. Using a JSON-based document database like MongoDB removes this layer of complexity and makes it easier to get up and running in Node.js.

### Adding the MongoDB package as a dependency
In order to read and write data from our new MongoDB database, we're going to be using the official MongoDB `npm` package. It's called... [mongodb](https://www.npmjs.com/package/mongodb). Run `npm install mongodb --save` in the Terminal to install mongodb as a dependency for our project.

### Adding some test data
Before we get too far into using this package, we should probably get some test data added to our database, so we can make sure everything is tested against actual data.

Launch Robo 3T and connect to your database (if you're not already). Toggle open your `forum_madness` database and right click on the `Collections` folder. Choose `Create Collection...` For `Collection Name` enter `users` and click `Create`. You should now see a new item inside of the `Collections` folder with an icon that looks like a sheet of grid paper and the label `users`. You've just created your first MongoDB collection! Pretty simple, eh?

Right click on the `users` collection and choose `Insert Document`. This is going to be a user account for you to use as a test case for the Javascript we'll write into our node application to fetch data from the database. But, it's not just test data, so we should probably decide on what information we actually need about our users...

Since a `document` is effectively just a Javascript Object, we can define our user in these terms...

```javascript
{
    email: 'email@example.com',
    first_name: 'Johnny',
    last_name: 'Appleseed',
    username: 'exampleuser',
    password: 'testing',
    threads: [],
    comments: []
}
```

This should be enough to get us started on the node side. Enter the JSON object above in the `Insert Document` dialog, and click `Save`. If you right click on the `users` collection and choose `View Documents`, you should now see a list of all documents in this collection, which should only be one. If you toggle this document open – using the little triangle on the left of the row containing the `ObjectId(...)` string, you should see all of the properties we just defined.

You may notice that MongoDB automatically created an `_id` property on this user document. This is a unique identifier for this user document that we can use to find the user. This `_id` property will be added to every document that is added to our database's collections, and MongoDB does the work of ensuring that this is a unique value.

Alright. It's time to start writing some Javascript to connect and read from MongoDB!

---

## Part 18: Creating our first Javascript class
Classes are the basis of Object Oriented Programming. Much like functions, they allow you to create reusable code that can serve the purpose of driving more than one part of your application. However, unlike functions, they allow you to create a group of functions that are all registered together as a part of an `instance` of your `class`. Along side that, it allows for a built-in function that will be run any time you `initialize` an `instance` of your class. This built-in function is called the `constructor`. Any time you initialize an instance of your class, Javascript will invoke your class' `constructor` function (if one is defined).

The way you define a class is pretty simple. Much like a function, it entails a keyword and a name. 

Where a function definition typically look like this `function myFunction(param1, param2) {...}`; using the `function` keyword, then a name for your function, some arguments that the function accepts, and then curly brackets surrounding the code to run when your function is invoked... 

A class definition looks like this `class MyClass {...}`; using the `class` keyword, then a name for your class, and curly brackets surrounding the code that makes up your class. The class that we'll be writing first will be sort of a "utility" class for our database connection, reading of data, and writing of data. So, using what we just covered, let's start stubbing it out.

### Stubbing out our MongoDB class
In your project root, add a folder called `app`. Inside of that folder add another folder called `util`, and inside of that folder create a file called `MongoDB.js`. Since this class is more of a "utility" function to be used by other classes, we'll store it in the `app/util` folder. Just an organizational benefit.

In your new `MongoDB.js` file add the following code:

```javascript
const MongoClient = require('mongodb').MongoClient;

class MongoDB {
    constructor() {
        this.client = MongoClient;
    }
}
```

This is a good starting point for us to see exactly how classes get uses in Javascript, but first a quick explanation of this code. 

The `mongodb` npm package, when required, `exports` (we'll get to this in a little bit, but just know that it's what is returned by the `require(...)` function) a Javascript Object. This object contains a bunch of properties that are themselves Javascript Objects which have a number of properties which are functions... One of the parent properties in the `mongodb` exported object is `MongoClient`. This is exactly what it sounds like. It's a database client for connecting and making requests to MongoDB. As mentioned before, every class has a built-in `constructor()` function that Javascript will invoke any time an instance of this class is initialized. This is the perfect time for us to do some initial setup for variables that we're going to need later on.

In the `constructor` of this class, we're simply creating a variable called `this.client` and assigning it to the previously required `MongoClient` object. I know that's all pretty dense, so... Let's see how this actually works in action and it will hopefully make sense.

#### Instantiating our class
Back in the `index.js`, we're going to add support for a new route. It's going to be for the `/api/database` route for the `GET` request method (from here on out, we'll assume that you know how to turn a statement like that into a proper `app.METHOD(PATH, CALLBACK)` call).

In the callback of the `/api/database` GET route, add the following:

```javascript
const MongoDB = require('./app/util/MongoDB');
const db = new MongoDB();

response.send('OK');
```

Save your file, and make a request to `/api/database`. It should FAIL with an error message something like `MongoDB is not a constructor`. This is expected and is a very good opportunity to explain a concept when working with classes that is unique to Node.js. That's that funny little word `exports` that I mentioned earlier. In this example, we're actually using `require` in a way that we haven't before. We're using it to `require` **a file that we've written** as opposed to an npm package that we've installed as a dependency of our project. The way we tell the `require` function that we're looking for a local file is by starting the argument string with `./`. This tells `require` to start looking for a file beginning at our project root, and then following the path provided. In this case it's `app/util/MongoDB` (the location of our new class file).

However, in node it's not enough to just write a Javascript file and `require` it. You need to explicitly tell `require` what this file `exports`. You do this by declaring – at the end of your file – `module.exports = SOMETHING_TO_EXPORT`. In this case, we want to export our MongoDB class, so we will add to the bottom of our `app/util/MongoDB.js` file `module.exports = MongoDB;` and save the file.

Now when you make a request to `localhost:3000/api/database`, you should see the `OK` message. Also, in the terminal, you should see a couple of really large Javascript Objects logged. This is the result of our `console.log(...)` statements, and is just for debugging and demonstrating a key point. 

If you scroll up to the beginning of this long log output, you'll see `MongoDB: class MongoDB {...` this is where we're using `console.log()` to log the value stored in `const MongoDB`. As you can see, adding `module.exports = MongoDB` to our file actually allowed `require(...)` to pull in our entire class definition. That's what gets logged out when we `console.log('MongoDB: ', MongoDB);`.

Following the `MongoDB` class definition in the log, you should also see `db: MongoDB {...`. This is a log of what was created when we set `const db = new MongoDB()`. We'll get to that in the next section.

Back to the code explanation...

#### The new keyword
In our callback, after we've successfully required `MongoDB`, we execute the code `const db = new MongoDB();`. This is leveraging a keyword that we've yet to see; the `new` keyword.

The `new` keyword is a keyword use to tell Javascript that you want a new `instance` of a class. In short, if I created a class called `Person` that  – in the `constructor` – set the variable `this.country = 'USA';`, and then created two variables in the following manner:

```javascript
let travis = new Person();
let blake = new Person();
```

What I'd be left with is two `instances` of `Person` that are pre-constructed with `this.country = USA`. In practice, these class instances behave a lot like Javascript Objects. They can store variables inside of themselves, they can house functions that live as properties on the instance, and they can be manipulated directly using the same dot notation (`console.log(travis.country);`).

All of that is to say that – for the time being – all you really need to know is that when we call `const db = new MongoDB();` all we're doing is asking for a "copy" of the `MongoDB` class and storing that copy in a variable called `db`. That's all the `new` keyword does.

Now that we've demonstrated that point, we're done with the `console.log(...)` calls in our `/api/database` route's callback. You can actually remove both the `console.log('MongoDB: ', MongoDB);` and the `console.log('db: ', db);` lines from your `/api/database` callback now.

---

## Part 19: Demystifying classes
During the previous section, you may have noticed one very subtle difference in syntax for classes. The class that we created uses a built-in function called `constructor` to prepare some stuff whenever the class is "instantiated" with the `new` keyword. However, when we wrote that function, we didn't have to precede the name of the function with the `function` keyword. This is actually the convention in classes.

Just to be clear, if I had this function standing on its own.

```javascript
function doubleNumber(num) {
    return num * 2;
}
```

And I wanted to add it to a `Math` class, that would look like this:

```javascript
class Math {
    doubleNumber(num) {
        return num * 2;
    }
}
```

As you can see, because the function now lives inside of a class, the preceding `function` keyword is no longer needed.

### Instance scope 
Earlier we covered very loosely what using the `new` keyword actually does, but this was more in general terms. Let's look at a couple more class concepts before we extend our class.

Let's continue with with the Math class example just to demonstrate how both the built-in `constructor` function and our custom class functions work together to make classes incredibly robust.

Traditionally, when calling a function, you can pass arguments to the function, and the function is responsible for accepting those arguments. The same is the case for classes, but the built-in `constructor` function is responsible for accepting arguments. The definition of the function is completely optional. If you do not declare a `constructor` function in your class – or if your constructor doesn't accept any arguments – any arguments that you initialize your class instances with will just be ignored.

So, continuing with the `Math` example. Say the purpose of this `Math` class was to be able to create a variable for a given number that would then have the ability to run mathematical equations on itself. 

An example of how we would want to use this class would be something like this:

_**class implementation**_
```javascript
// Create a new instance of the `Math` class using the number 2
let two = new Math(2);
// Create a new instance of the `Math` class using the number 3
let three = new Math(3);

console.log(two.double()); // logs 4
console.log(two.half()); // logs 1

console.log(three.double()); // logs 6
console.log(three.half()); // logs 1.5
```

In this example, our class would declare three functions: the built-in `constructor` function, a custom class function called `double`, and a custom class function called `half`.

That would look like this.

_**class definition**_
```javascript
class Math {
    constructor(num) {
        this.num = num;
    }

    double() {
        return this.num * 2;
    }

    half() {
        return this.num / 2;
    }
}
```

Notice that the `constructor` is responsible for accepting arguments on behalf of the class. What this implementation of the constructor function then does is store the `num` argument provided to our class as a property of the `this` object. The `this` object is a built-in keyword that, within the context of the class points to the current instance. This means that when the constructor is executed for `let two = new Math(2)`, the keyword `this` is pointing to a fresh "copy" of the `Math` class. And when the constructor for `let three = new Math(3)` is executed, the `this` keyword is pointing to a separate "copy" of the `Math` class. This means that the two resulting `this.num = num` assignments that will be executed by instantiating both `two` and `three` will **never** interfere with each other, because they're operating inside of separate copies (or "instances") of the `Math` class.

For this reason, we can continue to reference `this` in our other functions without knowing anything about the specifics of the instance that will be executing the function. So when `double()` returns `this.num * 2`, the value of `this.num` will be specific to the instance that the method is being called on. This is why in the implementation example, we call these class functions not as `Math.double()`, but instead we reference the instance variables `two` and `three` directly; `two.double()` and `three.double()`.

### Reviewing our MongoDB class
So, with that background out of the way, we can now revisit our `MongoDB` utility class and get a better idea of what it's doing.

```javascript
const MongoClient = require('mongodb').MongoClient;

class MongoDB {
    constructor() {
        this.client = MongoClient;
    }
}

module.exports = MongoDB;
```

We can use our previous knowledge of `module.exports` to make a pretty safe assumption that, since we're able to assign our `MongoClient` variable to `require('mongodb').MongoClient`, the `mongodb` pakage is likely exporting a Javascript Object with at least one property (`MongoClient`). So, we're storinn the value of this property in a variable.

Whenever a new instance of `MongoDB` is created, the `constructor` function will be executed, which will assign `MongoClient` to a new copy of `this.client` for this new instance.

So far, that's all we're doing. Simple enough!

---

## Part 20: Writing our first custom class function
One of the things that we'll be using the `client` property in our `MongoDB` class for is connecting to our MongoDB database. This will need to happen every time we read data from or write data to our database, so it's a good place to start.

A mongodb "connection string" is the URL used to make the connection to your MongoDB database. The format of this url is `mongodb://USER:PASSWORD@HOSTNAME:PORT/DATABASE`. Since this data will be the same all the time, we can take advantage of our constructor to create a `this.url` property on every instance. We created our `fm_node` user and our `forum_madness` database already, so we're good there. Let's add some more constants to our `MongoDB.js` file.

Before the actual class definition in your `MongoDB.js` file, add the following:

```javascript
const dbUser = 'fm_node';
const dbPass = 'fm_node';
const dbName = 'forum_madness';
```

We will use these variables to build our mongodb connection string in the constructor. But before we can do that, we need to resolve the `HOST`.

### The Docker Compose links property
We've already covered how to expose a port inside a given container to our computer with the `ports` property. But what we need to do is expose the `27017` port on our `mongo` container to **another container** (the `node` container), so that it can make a connection. This is done using the `links` property. And it's actually pretty straightforward.

In your `docker-compose.yml` file, add a new property to the `node` service configuration with one "dashed" sub-item with the value `mongo`.

Your updated `node` service configuration should look like this now:

```yaml
node:
    image: node:alpine
    command: npm start
    links:
      - mongo
    ports:
      - 3000:3000
    volumes:
      - .:/usr/src/app
    working_dir: '/usr/src/app'
```

What this `links` property does is allow us to make requests to our `mongo` container using the `host` name `mongo`. So, in our connection string, we'll be able to use this as the host.

In your `MongoDB.js` file, let's add some more constants for the `dbHost` and `dbPort`.

```javascript
const dbHost = 'mongo';
const dbPort = 27017;
```

### Adding our connection string url in our constructor
Now we're ready to create our connection string url.

In your `MongoDB` class' constructor function, add the following line:

```javascript
this.url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
```

This utilizes ES6 `template strings` to populate variables into a string directly without having to manually concatenate these string together using the `+` operator. All you have to do is place your "template string" in backticks, and wrap your variable name in curly brackets, preceded by a dollar sign. That looks like this: `${VARIABLE_NAME}`. This saves a lot of time when creating strings out of multiple variables; such as our current use case.

Now that we have our connection string url property in our constructor, we can use this string to connect to our database.

### Stubbing our connect function
The process when performing any action pertaining to our mongodb database will basically follow the same set of procedures whether we're reading existing data, writing/updating data, or deleting data.

The steps required are:

- Establish a connection to the database
- Perform database action
- Close the connection to the database

So, the first step to getting going with that is to write a function that will establish the connection to our mongodb database. The `MongoClient` object that we're using as our `this.client` property in the `MongoDB` class offers a function called `connect(...)` that does exactly this. This function takes two arguments; the connection string URL for the database we're connecting to (our `this.url` property), and a callback function after the database connection is attempted. The callback function takes two arguments; an `error` argument and a `database` argument. If the connection succeeds, the `error` argument will be `null` and the `database` argument will contain our database connection object. If the connection fails, the `error` argument will contain the error that caused the connection to fail, and the `database` argument will be `undefined`.

The implementation of this function looks like this:

```javascript
MongoClient.connect(URL, (ERROR, DATABASE) => {
    // Do something
});
```

However, since we're storing `MongoClient` in our `this.client` property, ours will use that property to call the `connect(...)` function. For now, let's just stub out our `connect` function so we can get a lay of the land.

In the `MongoDB.js` file, inside of your class definition (after the constructor function), add the following:

```javascript
connect() {

}
```

We'll be filling this function with our call to `this.client.connect(...)`, but first we need a little more prerequisite knowledge.

### Intro to Promises
When writing more robust Javascript code, it's very common to come across scenarios where you're doing "procedural" tasks that have to be executed in order. However, not all of those tasks are guaranteed to execute in order, since some of them may be "asynchronous", meaning – they don't resolve when the task is executed, but when it completes. A really good example of this is the `this.client.connect(...)` function.

Since there's no telling how long it's going to take for our application to establish a connection to the database (the network could suddenly slow down, the database itself could be busy processing some other request at the time we attempt the connection, etc...), some funny stuff happens in Javascript. Rather than halting all code from executing while our application establishes a connection (this would really slow things down), Javascript executes the request for a connection, then continues running our code. When the connection either fails or succeeds, then our callback is executed, and the `error` and `database` arguments are passed to the callback (now that they're available).

What this traditionally means in Javascript programming is that if you want some tasks to happen in a specific order, you would have every task's function accept a callback, and you'd nest these calls inside of other callbacks.

This is commonly referred to as "callback hell". And it looks like this:

```javascript
connect(url, (err, db) => {
    // We've got a database connection...
    // So find all users with the first name "Johnny"
    db.users.find({ first_name: 'Johnny' }, (err, users) => {
        // We've found some users...
        // So update them all to have the last name "Appleseed"
        users.update({ last_name: 'Appleseed' }, (err, users) => {
            // We've finished updating users...
            // So close the connection
            db.close();
        });
    });
});
```

As you can see, this code can get **really** sloppy and hard to read pretty easily, because each next step needs to happen in the callback of the previous step... It's horrible.

Luckily, Javascript has implemented the concept of a `Promise`. A promis is a class who's constructor takes a function with two arguments; a function to execute when your task succeeds (commonly called `resolve`), and a function to execute when your task fails (commonly called `reject`). Inside of this function argument, you add the code that you want to execute for your task, and at the "success" point, you simply invoke the `resolve` function argument, and in the even of a failure, you invoke the `reject` function argument. Since `Promise` is a class, it's instantiated with the `new` keyword.

Creating a new `Promise` that – for example – connects to our database, would end up looking something like this:

```javascript
new Promise((resolve, reject) => {
    this.client.connect(this.url, (err, db) => {
        if (err) {
            return reject(err);
        }

        return resolve(db);
    });
});
```

All this does is define a function inside of the promise that calls the `this.client.connect(...)` function. Once the database connection either succeeds or fails, and that callback is executed, it uses the `resolve` and `reject` function arguments to execute the logical "next step" in our procedure.

This might make little sense as to why this is helpful right now, but how this `Promise` gets used is where all of the magic happens.

#### Using promises procedurally
Suppose our `MongoDB` class' `connect(...)` function ends up returning a `Promise` like the one above. The way you can tell your `Promise` what the logical "next step" is, is with a function that exists on the `Promise` instance called `then(...)`. This function takes a function as an argument. This function is then passed to the `Promise` function as the `resolve` argument. The arguments of that function are completely flexible depending on what you plan to be passed to your `resolve(...)` invokation in the previous step.

What's really nice about this approach is that you will **never** enter "callback hell".

Again, assuming that our `MongoDB` class' `connect(...)` function returns a `Promise`, rather than having to do the "callback hell" approach, we can do something like this when using the `connect(...)` class function on a `MongoDB` instance.

```javascript
const db = new MongoDB();

db.connect().then((db) => {
    // do something with our database
});
```

Since `db.connect(...)` returns a `Promise`, the `then(...)` function is made available immediately. This means we can define our next step immediately, and whenever the `Promise` "resolves", the code in the `then(...)` function argument will be executed.

This may still be a little fuzzy, but just to make progress, let's implement this.

### Finally writing our connect function
In the body of the `MongoDB` class' `connect()` function, add the following code.

```javascript
return new Promise((resolve, reject) => {
    this.client.connect(this.url, (err, db) => {
        if (err) {
            return reject(err);
        }

        return resolve(db);
    });
});
```

That's it for the `connect()` function. Let's use it in our `/api/database` route to see how it looks in action.

In the `index.js` file, inside of your `/api/database` GET route, replace the `response.send('OK');` line with the following code:

```javascript
db.connect()
    .then((db) => {
        response.send('Connected!');
    })
    .catch((err) => {
        response.status(500).send(err.message);
    });
```

You can see that in addition to using the `then(...)` function, we're also using the `catch(...)` function. The exact same principles apply for this function (it takes a function argument with flexible arguments for that function), the only difference is that it's passed to your `Promise` function as the `reject` function argument. So, if you call `reject(err)`, then the function defined in `catch(...)` is executed.

That's a fairly deep dive into Promises!

So, let's test it. Save your files, and make a request to `/api/database`. You should see the text `Connected!`. If there was a problem connecting, you should see the error message for the problem.

---

## Part 21: Reading data
There are two ways that MongoDB allows you to search for data. These approaches for searching for data are made available as methods on `collection` objects. The names of these methods are `find(...)` and `findOne(...)`.

`find(...)` allows you to search for all documents in a collection that meet the search criteria passed to the function. The result of this search will be an array of document objects. In the event that only one document is found, the result will still be an array, but the array will only contain a single document object. In the event that no documents are found, the result will be an empty array.

`findOne(...)` allows you to search for a single document in a collection that meets the search criteria passed to the function. The result of this search will be a single document object. In the event that no documents are found, the result will be `null`.

In both cases, the first argument of these methods is the search criteria. This search criteria is passed in the form of a Javascript containing properties and values that you'd like to match in the database documents. For instance, if you wanted to find all documents in the `users` collection with the `first_name` property value of `Johnny`, your search criteria would look like this: `{ first_name: 'Johnny' }`.

The second argument of the `findOne(...)` function is a callback function that accepts two arguments; an `error` argument, and a `result` argument. Much like the `MongoClient.connect(...)` function, the `error` argument will be `null` unless there was an error searching for or retrieving the document(s). In the event that the query was successful, the `result` argument will be the found document.

In the case of the `find(...)` function, you need to explicitely translate the found documents list to a proper Javascript array. So, `find(...)` takes a single argument, and the returned value is an object that has a function property called `toArray(...)`. This function accepts the function to handle the `error` and `result`, and it follows the same rules detailed for the `findOne(...)` function argument.

These implementations end up looking like this:

```javascript
// find
COLLECTION.find(SEARCH_CRITERIA).toArray((err, result) => {
    // do something
});
// findOne
COLLECTION.findOne(SEARCH_CRITERIA, (err, result) => {
    // do something
});
```

### Writing the find function
In order to make our `MongoDB` utility class flexible enough to handle all of our collections, we're going to first update our `constructor` to take the name of the collection that we'll be accessing data from. This way, for our `users` collection, we'll be able to instantiate like so: `new MongoDB('users')`. For our `threads` collection, we'll be able to instantiate like so: `new MongoDB('threads')`. And so on...

Update the constructor function of the `MongoDB` class, to accept a single argument called `collection`. In the body of the constructor function, add an assignment to the `this` object: `this.collection = collection;`.

The end result should look like this:

```javascript
constructor(collection) {
    this.client = MongoClient;
    this.url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
    this.collection = collection;
}
```

Now we're ready to write our new `find()` function. In the class definition for the `MongoDB` class, add a function called `find()` that accepts one argument called `query`. This `query` argument will be our search criteria. We'll, again be returning a `Promise` to make the process of using this function in a multi-step procedure a little more readable.

Here's our code:

```javascript
find(query) {
    const { collection } = this;

    return new Promise((resolve, reject) => {
        this.connect()
            .then((db) => {
                db.collection(collection)
                    .find(query)
                    .toArray((err, result) => {
                        if (err) {
                            return reject(err);
                        }

                        resolve(result);
                        db.close();
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
}
```

So what this code is doing is returning a `Promise` that expects to execute the following procedure:

- Connect to the database
- Once the database connection resolves:
    - Search for documents matching the passed `query` (search criteria)
    - If there's an error, invoke the `reject` function with the `err` from the search
    - If there's no error, invoke the `resolve` function with the `result` of the search
    - Close the database connection

So, this follows all of the rules of the list we wrote earlier for reading/writing/deleting database data.

### Implementing the find function in a route
Since we're going to be using our `MongoDB` class in more than one route at this point, we should do some cleanup to the `/api/database` route. In the `index.js` file, remove the `const MongoDB = require('./app/util/MongoDB');` line from the route's callback, and move it to the top of the file just after the `const express = ...` line. This will allow us to use the class in more than one route without having to `require()` it more than once.

Now that that's out of the way, let's add a new GET route for the `/api/users` after the `/api/database` GET route. In the function argument of this new route, add the following code.

```javascript
const users = new MongoDB('users');

users.find({})
    .then((result) => {
        response.json(result);
    })
    .catch((err) => {
        response.status(500)
            .send(err.message);
    });
```

This now uses our new `find(...)` function that we added to the `MongoDB` class. It also utilizes the update to the constructor function to accept the name of the collection we'll be operating on.

The `find(...)` function is called with an empty `query` object. This is the same as searching for "all documents" in the collection. The `then(...)` operation accepts the result of this query and uses `response.json()` to send this data as a JSON response back to the client. The `catch(...)` operation accepts any error (remember, this is executed as the `reject` argument in our `Promise`) and sends a response with a `500` status code (this means we encountered a server error while attempting to resolve the request) and the content of the response is the `message` property of the error object.

Save your document and make a request to `/api/users`. You should get a response containing an array of all `users` documents in our database. At this point this should just be the one test document we added. Your `_id` field will be different from mine, but the response should look something like this:

```json
[
    {
        "_id": "59da90bf8dced62026fb914a",
        "email": "email@example.com",
        "first_name": "Johnny",
        "last_name": "Appleseed",
        "username": "exampleuser",
        "password": "testing",
        "threads": [],
        "comments": []
    }
]
```

You just read data from a database with Node.js!!!

---

## Finding documents by id
Coming soon...
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

# Part 14: Making our navigation data driven
Coming soon...
# Intro to real Javascript
This is a basic project to demonstrate a more common real-world workflow for Javascript development on both the client and server side.

## Table of contents
- [Using npm for dependencies](#using-npm-for-dependency-management)
    - [node.js overview](#nodejs-overview)
    - [npm overview](#npm-overview)
    - [The basics of npm](#the-basics-of-npm)
- [Using npm packages in your code](#using-npm-packages-in-your-code)
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

This is done pretty easily in Visual Studio Code as long as you have Jun Han's `Terminal` extension installed.

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

## Using npm packages in your code

### The require method

### Example usage

## Express

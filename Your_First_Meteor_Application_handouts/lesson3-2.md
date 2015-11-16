![](headings/3.2.png)

# Introduction

A Meteor **project** is the self-contained set of files that form the foundation of an application. You can use the words project and application interchangeably, but project is better suited for talking about an application as it's being developed. Every project is unique, but will generally contain HTML, CSS, JavaScript files and directories, to keep everything organized. A project can contain other types of files, like images and CoffeeScript files, but we'll keep things as simple as possible in this course, and only work with what we need.

# Creating Project Files and Folders

Before we create a project for the Leaderboard application though, let's create a directory to store our Meteor projects.

Inside the command line type

```
mkdir meteor
```

The `mkdir` command stands for "make directory". The precise location where the directory will be created will depend on your operating system, but at least on Mac OS X, it will appear inside the *home* directory by default. If you can't find the directory that's created, then simply use the search functionality on your computer.

Next, navigate into the newly created directory by typing

```
cd meteor
```

`cd` command stands for "change directory" and it's equivalent to double-clicking on a directory from inside the visual interface.

Create a Meteor project:

```
meteor create leaderboard
```

* The `meteor` part defines this as a Meteor command. So any command that specifically relates to Meteor will start with this.
* The `create` part clarifies the exact action we want to take. In this case we want to create a project.
* The `leaderboard` part is the name we're assigning to the project. We could, however, choose whatever name we want.

Our newly created project will contain three files that are named after the name of the project: *leaderboard.css*, *leaderboard.html* and *leaderboard.js*. We can split our project into as many files as we want, butin this course, we'll only be working with these specific files.
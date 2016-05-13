![](headings/3.2.png)

# Introduction

To create our first Meteor application, we need to create our first project. When working with Meteor, a project is the self-contained set of files that form the foundation of an application. You can use the words "project" and "application" interchangeably, but project is better suited for talking about an application as it's being developed. Every project is unique, but will generally contain HTML files to create the interface, CSS files to assign styles to the interface, JavaScript files to define application logic, and directories to keep everything organized. A project can contain other types of files, like images and CoffeeScript files, but we'll keep things as simple as possible in this course and only work with what we need.

# Creating Project Files and Folders

Before we create a project for the leaderboard application though, let's create a directory to store our Meteor projects. It's a good way to keep things organized.

Inside the command line, write

```
mkdir meteor
```

The `mkdir` command stands for "make directory". The precise location where the directory will be created will depend on your operating system, but at least on Mac OS X, it will appear inside the home directory by default. If you can't find the directory that's created, then simply use the search functionality on your computer.

Next, navigate into the newly created directory by typing

```
cd meteor
```

`cd` stands for "change directory" and it's equivalent to double-clicking on a directory from inside the visual interface.

To then create a Meteor project inside this directory, type

```
meteor create leaderboard
```

The `meteor` part defines this as a Meteor command, so any command that specifically relates to Meteor will start with this. The `create` part clarifies the exact action we want to take; in this case, we want to create a project. And the `leaderboard` part is the name we're assigning to the project.

After tapping the Return key, a `leaderboard` directory will appear inside the `meteor` directory that we created a moment ago. This directory is our Meteor project and by default, it will contain two folders and a number of files. You can split a Meteor project into as many files and folders as you like, but we're going to keep our file structure as simple as possible by deleting these files and starting from scratch. Don't delete them just yet though, we still need them for the next section.
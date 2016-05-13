![](Your_First_Meteor_Application_handouts/headings/10.1.png)


# Creating User Accounts

The biggest problem with our application is that it only supports a single list of players. This means there can only be one user of the application at any one time, which isn't very useful for an application on the web. To fix this, we're going to add a user accounts system to our project, which is actually one of the simplest things we can do with the framework. With this system in place, users will be able to register and login. Logged-out users won't see the parts of the interface they're not meant to see. Every user will have their own unique leaderboard.

To add a user accounts system to our project, we can install what is known as a **login provider package**. This package will make it extremely easy to create the back-end of an accounts system for a project.

# Packages

Just run the following command inside the command line:

```
meteor add accounts-password
```

This accounts-password package allows us to quickly build an accounts system that relies on an email and a password for registration and logging in. After the package is installed, a collection is automatically created to store the data of registered users. The name of this collection is `Meteor.users` and it works like any other collection that we might create ourselves.

To demonstrate this, enter the following into the console:

```
Meteor.users
```

The returned information will confirm that this is a regular collection. We can even use the `find` and `fetch` functions, but since there aren't any registered users at the moment, no data will be returned. This package also provides us with a number of useful functions, and we'll see a couple of these as we progress through the chapter.

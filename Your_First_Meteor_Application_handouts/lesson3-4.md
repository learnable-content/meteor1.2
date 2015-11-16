![](headings/3.4.png)

# Introduction

The default application is nothing special, but, each time we click the "Click Me button", the number on the screen will increase. This is a very basic demonstration of Meteor's real time features. The code behind this application though, isn't precisely important, since we're going to cover a much greater scope in the coming videos.

# Working with the Project

For the time being, open the project's files and delete all of the default code. Don't even look at the code, as it might appear a little overwhelming.

Next, add the following statement to the JavaScript file:

```js
console.log('Hello world');
```

Save the file, switch back to the browser, and open the JavaScript console. You can do this by clicking on the View menu, hovering over the Developer option,a nd selecting JavaScript Console. A pane will open at the bottom of the browser that displays the Hello world string that we just defined.

If all of this is familiar, great. But if not, then know that `console.log` statements are used to see the output of code without creating an interface to display that output. This means, before we invest time into creating an interface, we can confirm that our code is working as expected and fixed any bugs as soon as they appear. We can also use the console to manipulate our applications database, which is what we'll do in the next chapter. Leave the console open for the remainder of this course, but delete the `console.log` statement that's inside the JavaScript file.
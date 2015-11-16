![](headings/3.3.png)

# The Local Server

Web applications are not like static websites: we can't just open the *leaderboard.html* file, and see a working application in our web browser. In fact, if we open that file in the browser, we'll only see some static text. To get the application working, we need to launch what is known as a **local sever** - a web server that runs on our local machine. The local server is included with Meteor and it lets us see the process results of our JavaScript code, and also, interact with the database that comes included with the project.

# Starting the Local Server

To start up the local server for our project, navigate into the *leaderboard* directory with the `cd` command, and run the following command:

```
meteor run
```

After tapping the `Enter` key, some output will appear in the command line and the local server will be running. You'll see the web address appear, and by visiting this address your working application will be displayed.

To continue seeing the results of our code, we need to keep the local server running. This means leaving the command line open from this point onward. You will, however, need to open a separate tab or window to continue entering commands. To stop the local server at any point, either quit out of the command line entirely, or with the command line in focus, tap the `Ctrl+C` shortcut on your keyboard.
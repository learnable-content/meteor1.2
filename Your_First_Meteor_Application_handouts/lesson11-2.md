![](headings/11.2.png)

# isServer

In this course, we've mostly been writing code inside the `isClient` conditional. This is because we've mostly been writing code that specifically affects the interface. There are, however, situations where we'll want to run code on the server.

To demonstrate one of these situations, create a `console.log` statement inside the `isServer` conditional, and pass through a `find` and `fetch` function for the `PlayersList` collection. Unsurprisingly, the output of this statement appears in the command line. But notice that we don't have any trouble retrieving any of the data from the collection, despite the fact that we removed the autopublish package. This is because code that is executed on the server, is inherently trusted. So while we stopped users from accessing data from a web browser, we can continue to retrieve all of the data while interacting directly with the server. We'll see why this matters in a moment.
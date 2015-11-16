![](headings/11.4.png)

# Meteor.publish function

In this section, we want to make it so the `Meteor.publish` function only publishes data that belongs to the currently logged in user. This means logged in users will only have access to their data, and logged out users won't have access to any data. As a result, the application will be functional, but secure. To achieve this, we'll need to access the unique ID of the currently logged in user from within the `Meteor.publish` function.

# Create a currentuserId Variable

To do this, create a `currentuserId` variable:

```js
if (isServer) {
	Meteor.publish('thePlayers', function() {
		var currentuserId = this.userId;
		return PlayersList.find();
	})
}
```

Elsewhere, we'd use the `Meteor.userIdfunction` to retrieve the unique ID of the logged in user, but this function doesn't work within publish functions.

Next, change the `find` function so it only retrieves documents where the `createdBy` field is equal to the id of the currently logged in user:

```js
if (isServer) {
	Meteor.publish('thePlayers', function() {
		var currentuserId = this.userId;
		return PlayersList.find({createdBy: currentuserId});
	})
}
```

Save the file, switch to the browser, and use the `find` and `fetch` functions. If you're not logged in, no data will be returned, but if you log into an account and use the functions again, you'll notice that you only have access to the data that belongs to the current user. There's no longer a way for a user to access data, that they shouldn't be able to access.
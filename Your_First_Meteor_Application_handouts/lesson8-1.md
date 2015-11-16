![](headings/8.1.png)

# Introduction

In this chapter, we're going to finish the remaining features of the original Leaderboard application. Then we'll start working on some new features.

To begin, we're going to create a "Give 5 Points" button that when clicked will increment the value of the selected player's `score` field. To do this, create a button inside the Leaderboard template:

```html
<button class="increment">Give 5 Points</button>
```

To then make this button do something, create a click event handler that's attached to the `increment` class:

```js
Template.leaderboard.events({
	'click .increment': function() { }
});
```

Within the event, we need to grab the unique ID of the selected player. We can then use that ID to find a player inside the player's list collection, and increment the value of that player's score field by five. To access the unique ID of the selected player,use the `Session.get` function to retrieve the value of the selected player session and store the result in a `selectedPlayer` variable. Then output this variable to the console:

```js
Template.leaderboard.events({
	'click .increment': function() {
		var selectedPlayer = Session.get('selectedPlayer');
		console.log(selectedPlayer);
	}
});
```
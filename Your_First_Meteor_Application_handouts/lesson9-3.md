![](headings/9.3.png)

# Removing Players

To allow users to remove players from the leaderboard, first create a "Remove player" button inside the leaderboard template and give this button a `class` attribute of `remove`:

```html
<button class="remove">Remove player</button>
```

Then create a click event for the leaderboard template that's attached to the `remove` class. Within this event, retrieve the ID of the currently selected player from the `selectedPlayer` session, and attach a `remove` function to the `PlayersList` collection. By passing an id of a document into this `remove` function we are able to remove that document from the collection:

```js
'remove': function() {
	var selectedPlayer = Session.get('selectedPlayer');
	PlayersList.remove({_id: selectedPlayer});
}
```

With this code in place, users will now be able to click the "Remove Player" button to remove the currently selected player from the leaderboard.
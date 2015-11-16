![](headings/8.4.png)

# Introduction

When a user selects one of the players in the list, that player's name should appear beneath the list. To achieve this, create a `selectedPlayer` helper function for the leaderboard template. Within this function, retrieve the ID of the currently selected player using the `Session.get` function and store this inside a `selectedPlayer` variable. Then create a `return` statement that uses a `findOne` function to retrieve the selected players document:

```js
'selectedPlayer': function() {
	var selectedPlayer = Session.get('selectedPlayer');
	return PlayersList.findOne({_id: selectedPlayer});
}
```

We haven't talked about the `findOne` function before, but this function offers a performance benefit over the the regular `find` function. This is because, while the `find` function will search through the collection for all possible matches to a query, the `findOne` function will stop searching as soon as a match is found. As such, if you ever need to only retrieve a single document, it's best to use the `findOne` function.

Next place a reference to the `selectedPlayer` function inside the Leaderboard template:

```html
<li>Selected player: {{selectedPlayer}}</li>
```

I'm placing mine at the bottom of the player's list between a pair of list item tags.

# The findOne function

But if we save the file, the output won't look quite right. And that's because the `findOne` function is retrieving the player's entire document. To fix this, we need to specify that we only want to retrieve the value of the document's `name` field. This can be achieved with dot notation:

```js
'selectedPlayer': function() {
	var selectedPlayer = Session.get('selectedPlayer');
	return PlayersList.findOne({_id: selectedPlayer.name});
}
```

We should also make it so the template doesn't attempt to show a player's name if a player isn't selected. This can be achieved with a conditional in the Spacebars syntax:

```html
{{#if selectedPlayer}}
<li>Selected player: {{selectedPlayer}}</li>
{{/if}}
```

We can also use this same conditional to make sure the interface buttons don'tappear, unless a player is currently selected:

```html
{{#if selectedPlayer}}
	<li>
		<button class="increment">Give 5 Points</button>
		<button class="decrement">Take 5 Points</button>
	</li>
{{/if}}
```
![](headings/3.1.png)

# Introduction

A big mistake that many beginning developers make is trying to build an application without having a clear idea of what exactly they're trying to build. This is like driving to a new destination without a map. You might make a little progress in the right direction, but you probably won't get to where you need to go. Therefore we will need some kind of plan.

So we're going to build Leaderboard, an application that the Meteor development group designed to show-off Meteor's features. Leaderboard has since been replaced by more advanced examples on the official website, but we're going to build this project for a couple of reasons:

* The application already exists. This means we can get a good idea of what we're trying to build before we write a single line of code.
* The application is simple. This means we don't have to think too hard about the conceptual aspects of building software which is usually the most difficult part. Instead, we can focus purely on learning Meteor itself.

# Setting Up the Project

To get hands on time with Leaderboard, visit [http://leaderboard.meteortips.com](leaderboard.meteortips.com). Play around with the application and notice that there is a list of players. Each player has a name and a score. Players are ranked by their score and users can select players by clicking on them. After selecting a player, users can increment that player's score by clicking the "Give 5 Points" button. In later chapters we're going to add a number of our own features to the application. But even just building the application's original features will allow us to cover a lot of Meteor's most interesting functionality.
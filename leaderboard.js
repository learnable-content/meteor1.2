PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
  });
  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked a .player element");
    }
  });
}

if(Meteor.isServer){
  // server only code
}
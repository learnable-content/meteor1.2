PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
  });
  Template.leaderboard.events({
    'click .player': function(){
      Session.set('selectedPlayer', 'session value test');
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    }
  });
}

if(Meteor.isServer){
  // server only code
}
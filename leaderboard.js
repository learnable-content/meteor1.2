PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find({}, { sort: {score: -1, name: 1} });
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    },
    'selectedPlayer': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne({ _id: selectedPlayer });
    }
  });
  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update({ _id: selectedPlayer }, { $inc: {score: 5} });
    },
    'click .decrement': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update({ _id: selectedPlayer }, {$inc: {score: -5} });
    }
  });
  Template.addPlayerForm.events({
    'submit form': function(event){
        console.log('Form submitted')
    }
  });
}

if(Meteor.isServer){
 
}
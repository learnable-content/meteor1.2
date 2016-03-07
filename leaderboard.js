PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
      'player': function(){
          return "This is the new way to create helpers";
      }
  });
}

if(Meteor.isServer){

}
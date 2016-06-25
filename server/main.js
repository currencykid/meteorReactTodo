import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/tasks';

Meteor.startup(() => {
  // code to run on server at startup
  //only publish tasks that are public or belong to current user
  Meteor.publish('tasks', function tasksPublication(){
      return Tasks.find({
        $or: [
          { private: { $ne: true} } ,
          { owner: this.userId} , 
        ], 
      }); 
  });
});

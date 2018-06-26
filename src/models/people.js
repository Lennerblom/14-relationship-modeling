'use strict';

import mongoose, {Schema} from 'mongoose';

const PeopleSchema = mongoose.Schema({
  Name: {type:String, required:true},
  Age: {type:Number},
  chore: {type: Schema.Types.ObjectId, ref: 'Chores'},
  
});

export default mongoose.model('People', PeopleSchema);
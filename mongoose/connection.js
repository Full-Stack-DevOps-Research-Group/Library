var mongoose = require('mongoose');

// Connect to mongoDB
mongoose.connect('mongodb://localhost/devtest');

mongoose.connection.once('open', function(){
  console.log('Connection has been made.');
}).on('error', function(error){
  console.log('Connection error:', error);
});

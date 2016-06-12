var MailParser = require('mailparser').MailParser;
var mongoose   = require('mongoose');
var smtp       = require('smtp-protocol');
var Email      = require('./email_schema.js');

var mailparser = new MailParser();


mailparser.on("end", function(obj) {
  console.log('mail object........', obj);
  
  new Email(obj).save(function(err, email) {
    console.log("Email saved...........", err, email);
  });
});


var server = smtp.createServer(function(req) {
  req.on("message", function(stream, ack) {
    stream.pipe(mailparser);
    ack.accept();
  });
});


mongoose.connect('mongodb://localhost/smtp', {}, function() {
  server.listen(9025);
});



var should = require('should'),
    nodemailer = require("nodemailer");

function sendMail(done) {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        host: "localhost",
        secureConnection: false,
        port: 9025,
        requireTLS: false
    });
    console.log(smtpTransport);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Pankaj Joshi √ <pankaj.joshi.jpy@gmail.com>", // sender address
        to: "pankaj.joshi.acs@gmail.com, paxjoshi27tumbin@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world ✔", // plaintext body
        html: "<b>Hello world ✔</b>" // html body
    };
    console.log(mailOptions);
    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        console.log('Error........', error);
        console.log('Response.....', response);
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
        done();

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}


describe("Send mail", function() {
    before(function(done) {
        done();
    });

    it("should be able to send mail", function(done) {
        sendMail(done);
    });
});


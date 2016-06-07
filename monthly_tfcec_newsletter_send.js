'use strict';
var nodemailer = require('nodemailer'),
	q = require('q'),
	FS = require('fs'),
	Emails = require('./tfcec-email-list-membership.js');

var objDate = new Date(),
    locale = "en-us",
    month = objDate.toLocaleString(locale, { month: "long" });

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://josh.vito%40gmail.com:iysfqscfoshmvhks@smtp.gmail.com');

function getHtml(){
	var deferred = q.defer();
	FS.readFile("./tfcec_newsletter_posted_inlined.html", "utf-8", deferred.makeNodeResolver());
	return deferred.promise;
}

function sendEmails(options){
	var deferred = q.defer();
	// send mail with defined transport object
	transporter.sendMail(options, function(error, info){
	    if(error){
	        deferred.reject(new Error(error));
	    }
	    deferred.resolve('Message sent: ' + info.response);
	});
	return deferred.promise;
}

var tos = 'tfceceditor@gmail.com';
var bccs = '';//append the list of club members

var messageText = "Download the latest TFCEC newsletter by visiting the club website at http://tropical-fish-club-of-erie-county.com" +
" \n"+
	"As always, if you have any content to add to next month's newsletter, reply to this message and I'll do my best to accomodate."+
" \n"+
"See you at the next meeting."+
"-"+
"Josh"+
"tfceceditor@gmail.com";

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Josh 🐟" <tfceceditor@gmail.com>', // sender address
    to: tos, // list of receivers
    replyTo: "tfceceditor@gmail.com",
    bcc: (Emails.getBcc()) + "," + (Emails.getFriends()),
    subject: 'Now Available: TFCEC ' + month + ' Newsletter', // Subject line
    text: messageText, // plaintext body
    html: null // html body
};

getHtml()
.then(function(data){
		mailOptions.html = data;
		return sendEmails(mailOptions);
		console.log(mailOptions.bcc);
	})
.then(function sendEmailsCompleted(data){
	console.log(data);
});
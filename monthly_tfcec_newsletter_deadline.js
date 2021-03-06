'use strict';
let nodemailer = require('nodemailer'),
	q = require('q'),
	FS = require('fs'),
	TRANSPORTER = require('./gmail.transporter.js');

// create reusable transporter object using the default SMTP transport
let transporter = TRANSPORTER.get();

function getHtml(){
	let deferred = q.defer();
	FS.readFile("tfcec_newsletter_deadline_inlined.html", "utf-8", deferred.makeNodeResolver());
	return deferred.promise;
}

function sendEmails(options){
	let deferred = q.defer();
	// send mail with defined transport object
	transporter.sendMail(options, function(error, info){
	    if(error){
	        deferred.reject(new Error(error));
	    }
	    deferred.resolve('Message sent: ' + info.response);
	});
	return deferred.promise;
}
let tos = 'gardneri@aol.com, princess.donna@live.com, tfcectom@gmail.com, triz316@verizon.net, TFCPREZ2@gmail.com, petespoint@juno.com,	fdsh5@verizon.net, Wildbill41361@aol.com, jfitz105@hotmail.com, antoniomfmartina@yahoo.com, TfcecMikeC@gmail.com, cphardy85@gmail.com, phantom621@hotmail.com, Theduuz@aol.com, 7162085596@mms.att.net, dawnmd@gmail.com, TKoala529@aol.com, eddierahaim@hotmail.com';
let messageText = "BOD and Committee chairs,"+
// " \n"+
// "NOTE: FOR JULY 2016: The deadline will be July 1, 2016 as I am on vacation the week of the 4th."
// " \n"+
" \n"+
"The deadline for the next newsletter is the LAST Tuesday of the Month."+
 " \n"+
"Please do your best to reply with the following so an update can be included in this month's newsletter."+
" \n"+
"·         Chairman's Message"+
" \n"+
"·         This month and future program information, speaker, talk subject etc."+
" \n"+
"·         Last month's bowl show winners (with photo)"+
" \n"+
"·         Current year to date BAP standings"+
" \n"+
"·         Current year to date HAP standings"+
" \n"+
"·         Current year to date WAP standings"+
" \n"+
"·         Minutes from last BOD meeting"+
" \n"+
"·         Minutes from previous month's general meeting"+
" \n"+
"·         Membership news and updated member email list"+
" \n"+
"·         Any additional message you need to share (upcoming events, club news, ways and means etc.)"+
 " \n"+
"Thank you all for your hard work."+
"-"+
"Josh"+
"tfceceditor@gmail.com";

// setup e-mail data with unicode symbols
let mailOptions = {
    from: '"Josh 🐟" <tfceceditor@gmail.com>', // sender address
    to: tos, // list of receivers
    subject: 'TFCEC Newsletter Deadline is approaching', // Subject line
    text: messageText, // plaintext body
    html: null // html body
};

getHtml()
.then(function(data){
		mailOptions.html = data;
		return sendEmails(mailOptions);
	})
.then(function sendEmailsCompleted(data){
	console.log(data);
});
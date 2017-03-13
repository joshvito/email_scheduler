'use strict';

var emails_20170317 = ""+
"altifrons@aol.com,"+
"angelman4@verizon.net,"+
"bmtdj@yahoo.com,"+
"bonniegiff@aol.com,"+
"brokenboxj@gmail.com,"+
// "caseykesterson@live.com,"+
// "ceganyboy@webtv.net,"+
"cjgray49@gmail.com,"+
"cphardy85@gmail.com,"+
"cuttinglight@gmail.com,"+
"dawnmd@gmail.com,"+
"diggindirt45@gmail.com,"+
"dtr1991@hotmail.com,"+
"extra-spicy@hotmail.com,"+
"fishguy_99@yahoo.com,"+
"fishman544@gmail.com,"+
"frankmoreauonthetube@gmail.com,"+
"gardneri@aol.com,"+
"gregdalortz@gmail.com,"+
"gregnski@cs.com,"+
"haaksr7@yahoo.com,"+
"hoppfishmusic@yahoo.com,"+
"jackmullen2001@yahoo.com,"+
"jasonrd1215@yahoo.com,"+
"jeksoldfalls@gmail.com,"+
"jimfitz105@gmail.com,"+
"jkrywalski@roadrunner.com,"+
"josephmalikowski77@gmail.com,"+
"josh.vito@gmail.com,"+
"kilobob53@aol.com,"+
"kingfish51@verizon.net,"+
"mcjit99@aol.com,"+
"miguelongo9@gmail.com,"+
"mike@mikeswetpets.com,"+
"pappaluigi@verizon.net,"+
"petespoint@juno.com,"+
"phantom621@hotmail.com,"+
"phoffman3@rochester.rr.com,"+
"Princess.donna@live.com,"+
"qty10@aol.com,"+
"rapidron36@verizon.net,"+
"rayenzinna@yahoo.com,"+
"renae1964@gmail.com,"+
"risquediver@yahoo.com,"+
"rjgbuffalo1@yahoo.com,"+
"robert.p.carney@icloud.com,"+
"russ531@hotmail.com,"+
"rxslave@aol.com,"+
"shflierl@gmail.com,"+
"steve826@roadrunner.com,"+
"t_russ2@yahoo.com,"+
"tbam101@gmail.com,"+
"tfcectom@gmail.com,"+
"tfcprez2@aol.com,"+
"tgroset@yahoo.com,"+
"theduuz@aol.com,"+
"tkoala529@aol.com,"+
"triz316@verizon.net,"+
"wildbill41361@aol.com,"+
"wilkolaski@roadrunner.com,"+
"wrobinson113@triad.rr.com,"+
"zenzerhead@aol.com,"+


var emails_20161219 = ""+
"altifrons@aol.com,"+
"angelman4@verizon.net,"+
"bmtdj@yahoo.com,"+
"bonniegiff@aol.com,"+
"brokenboxj@gmail.com,"+
// "caseykesterson@live.com,"+
// "ceganyboy@webtv.net,"+
"cjgray49@gmail.com,"+
"cphardy85@gmail.com,"+
"cuttinglight@gmail.com,"+
"dawnmd@gmail.com,"+
"diggindirt45@gmail.com,"+
"dtr1991@hotmail.com,"+
"extra-spicy@hotmail.com,"+
"fishguy_99@yahoo.com,"+
"fishman544@gmail.com,"+
"frankmoreauonthetube@gmail.com,"+
"gardneri@aol.com,"+
"gregnski@cs.com,"+
"haaksr7@yahoo.com,"+
"jackmullen2001@yahoo.com,"+
"jeksoldfalls@gmail.com,"+
"jimfitz105@gmail.com,"+
"jkrywalski@roadrunner.com,"+
"josephmalikowski77@gmail.com,"+
"josh.vito@gmail.com,"+
"kilobob53@aol.com,"+
"kingfish51@verizon.net,"+
"mcjit99@aol.com,"+
"miguelongo9@gmail.com,"+
"mike@mikeswetpets.com,"+
"pappaluigi@verizon.net,"+
"petespoint@juno.com,"+
"phantom621@hotmail.com,"+
"phoffman3@rochester.rr.com,"+
"Princess.donna@live.com,"+
"qty10@aol.com,"+
"rapidron36@verizon.net,"+
"rayenzinna@yahoo.com,"+
"renae1964@gmail.com,"+
"risquediver@yahoo.com,"+
"rjgbuffalo1@yahoo.com,"+
"russ531@hotmail.com,"+
"shflierl@gmail.com,"+
"steve826@roadrunner.com,"+
"t_russ2@yahoo.com,"+
"tbam101@gmail.com,"+
"tfcectom@gmail.com,"+
"tfcprez2@gmail.com,"+
"tgroset@yahoo.com,"+
"theduuz@aol.com,"+
"tkoala529@aol.com,"+
"triz316@verizon.net,"+
"wildbill41361@aol.com,"+
"wilkolaski@roadrunner.com,"+
"wrobinson113@triad.rr.com,"+
"zenzerhead@aol.com,"+
"";

var tfcecFriends = ""+
"CNYASPres@gmail.com,"+ 
"borstein@yahoo.com,"+ 
"bulletin@hdas.ca,"+ 
"ceichrodt@comcast.net,"+ 
"champaignfishguy1@yahoo.com,"+ 
"coryjeb@comcast.net,"+ 
"cyrus646464@yahoo.com,"+
"dwilliamson223@hotmail.com,"+
"fishlounge1@cs.com,"+ 
"fraleyb@sbcglobal.net,"+ 
"pparadis1@hotmail.com,"+
"romanhaljkevic@gmail.com,"+
"scaaseditor@yahoo.com,"+
"r_bierbower@hotmail.com,"+ 
"ron.bishop2@sympatico.ca,"+ 
"skmsoka@gmail.com,"+ 
"wilmaches@hotmail.com,"+ 
"wtoven@hotmail.com,"+ 
"zenin@golden.net,"+
"";

// USE VIA
//   var buz = require('./tfcec-email-list-membership.js');
//    buz.getBcc();
var TFCECEMAILS = function () {};

// TFCECEMAILS.prototype.getBcc = function () {
//   return emails;
// };

TFCECEMAILS.prototype.getBcc = function () {
  return emails_20170317;
};

TFCECEMAILS.prototype.getFriends = function () {
  return tfcecFriends;
};

module.exports = new TFCECEMAILS();
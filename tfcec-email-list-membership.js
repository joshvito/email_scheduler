'use strict';

var emails = ""+
"bmtdj@yahoo.com,"+
"bonniegiff@aol.com,"+
"brokenboxj@gmail.com,"+
"cjgray49@gmail.com,"+
"cphardy85@gmail.com,"+
"crcarthew@yahoo.com,"+
"cuttinglight@gmail.com,"+
"dawnmd@gmail.com,"+
"dtr1991@hotmail.com,"+
"extra-spicey@hotmail.com,"+
"fishguy_99@yahoo.com,"+
"fishman544@gmail.com,"+
"gardneri@aol.com,"+
"gregnski@cs.com,"+
"jackmullen2001@yahoo.com,"+
"jeksoldfalls@outlook.com,"+
"jimfitz105@gmail.com,"+
"jkrywalski@roadrunner.com,"+
"josh.vito@gmail.com,"+
"kilobob53@aol.com,"+
"kingfish51@verizon.net,"+
"mcjit99@aol.com,"+
"mike@mikeswetpets.com,"+
"pappaluigi@verizon.net,"+
"petespoint@juno.com,"+
"phantom621@hotmail.com,"+
"phoffman3@rochester.rr.com,"+
"Princess.donna@live.com,"+
"qty10@aol.com,"+
"rapidron36@verizon.net,"+
"renae1964@gmail.com,"+
"rjgbuffalo1@yahoo.com,"+
"russ531@hotmail.com,"+
"shflierl@gmail.com,"+
"steve826@roadrunner.com,"+
"tfcectom@gmail.com,"+
"TKoala529@aol.com,"+
"tfcprez2@aol.com,"+
"tgroset@yahoo.com,"+
"theduuz@aol.com,"+
"triz316@verizon.net,"+
"wildbill41361@aol.com,"+
"wilkolaski@roadrunner.com,"+


var emails_20161105 = ""+
"angelman4@verizon.net,"+
"bmtdj@yahoo.com,"+
"bonniegiff@aol.com,"+
"brokenboxj@gmail.com,"+
"bullbud@gmail.com,"+
"carved716@gmail.com,"+
// "caseykesterson@live.com,"+
// "ceganyboy@webtv.net,"+
"crcarthew@yahoo.com,"+
"cjgray49@gmail.com,"+
"colton_peterson@hotmail.com,"+
"cphardy85@gmail.com,"+
"cuttinglight@gmail.com,"+
"davebinko@yahoo.com,"+
"davin3179@aol.com,"+
"dawnmd@gmail.com,"+
"diggindirt45@gmail.com,"+
"dnewsham68@gmail.com,"+
"dtr1991@hotmail.com,"+
// "extra-spicey@hotmail.com,"+
"fairytales1980@gmail.com,"+
"fdsh5@verizon.net,"+
"fishguy_99@yahoo.com,"+
"fishman544@gmail.com,"+
"frenchmdm@yahoo.com,"+
"galstaph@gmail.com,"+
"gardneri@aol.com,"+
"gregnski@cs.com,"+
"haaksr7@yahoo.com,"+
"hoppfishmusic@yahoo.com,"+
"jackmullen2001@yahoo.com,"+
"jczuba@buffalolodging.com,"+
"jdoss33106@gmail.com,"+
"jeksoldfalls@outlook.com,"+
"jessemason@gmail.com,"+
"jimfitz105@gmail.com,"+
"jjoleen21@yahoo.com,"+
"jkrywalski@roadrunner.com,"+
"josephmalikowski77@gmail.com,"+
"josh.vito@gmail.com,"+
"kendrolabs@aol.com,"+
"kilobob53@aol.com,"+
"kimantha333@gmail.com,"+
"kingfish51@verizon.net,"+
"leonardc5711@gmail.com,"+
"leprells@aol.com,"+
"ludwigruss@gmail.com,"+
"mcjit99@aol.com,"+
"miguelongo9@gmail.com,"+
"mike@mikeswetpets.com,"+
"newmanjc@buffalostate.edu,"+
"pappaluigi@verizon.net,"+
"pennopee@yahoo.com,"+
"petespoint@juno.com,"+
"phantom621@hotmail.com,"+
"phoffman3@rochester.rr.com,"+
"pmljr@aol.com,"+
"Princess.donna@live.com,"+
"qty10@aol.com,"+
"rapidron36@verizon.net,"+
"reelupman14@gmail.com,"+
"renae1964@gmail.com,"+
"rjgbuffalo1@yahoo.com,"+
"russ531@hotmail.com,"+
"sandie6969@gmail.com,"+
"shflierl@gmail.com,"+
"shizzle47688@gmail.com,"+
"steve826@roadrunner.com,"+
"t_russ2@yahoo.com,"+
"tbam101@gmail.com,"+
"tfcectom@gmail.com,"+
"TKoala529@aol.com,"+
"tfcprez2@aol.com,"+
"tgroset@yahoo.com,"+
"theduuz@aol.com,"+
"triz316@verizon.net,"+
"twlosinski@yahoo.com,"+
"vandave123@gmail.com,"+
"wildbill41361@aol.com,"+
"wilkolaski@roadrunner.com,"+
"zenzerhead@aol.com,"+
"" ;

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

TFCECEMAILS.prototype.getBcc = function () {
  return emails;
};

TFCECEMAILS.prototype.getBccPre201611 = function () {
  return emails_20161105;
};

TFCECEMAILS.prototype.getFriends = function () {
  return tfcecFriends;
};

module.exports = new TFCECEMAILS();
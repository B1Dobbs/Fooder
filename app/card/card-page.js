const topmost = require("ui/frame").frame;
const frame = require('tns-core-modules/ui/frame');
var SwipeEvent = require("nativescript-swipe-card");
var HomeViewModel = require("./home-view-model");

var currIndex = 0;
var cards = [];


exports.onNavigatingTo = function(args) {
  const page = args.object;
  page.bindingContext = new HomeViewModel(page.navigationContext);
  exports.loadTestCards(page);
  let swipeCard = page.getViewById("swipe");
  swipeCard.on("swipeEvent", (SwipeEvent) => {
      if (args.direction === 1) {
          //right 
          currIndex--;
          console.log('Swiped to right');
      } else {
          //left
          currIndex--;
          console.log('Swiped to left');
      }
  });
  //exports.getMatches(page);
};





function gotoSettings(args) {
 frame.topmost().navigate( {
      moduleName: 'settings/settings-page',
  } );
}


exports.swipeButtons = function(args){
  console.log("Swipe action");
  var card = args.object.page.getViewById("swipe").items[currIndex];
  if(currIndex >= 0){
    currIndex--;
    if(args.object.id == "exButton"){
        card.animate({
          translate: { x: -500, y: 0},
          duration: 1000
      });
      console.log("Animate exButton: " + card);
    }else if(args.object.id == "heartButton"){
      console.log("Animate heartButton" + card);
      card.animate({
          translate: { x: 500, y: 0},
          duration: 1000
      });
    }
  }
  console.log("Current Index:" + currIndex);
}

exports.getStarRatio = function(text){

  var starCount = parseFloat(text);
  var percent = ((starCount * 100) / 5) + 1;
  return "linear-gradient(to right, orange " + percent + "%, #d2d2d9 " + percent + "%)";

}






exports.gotoSettings = gotoSettings;

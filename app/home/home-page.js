const topmost = require("ui/frame").topmost;
var SwipeEvent = require("nativescript-swipe-card");
var HomeViewModel = require("./home-view-model");
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var GridLayout = require("ui/layouts/grid-layout").GridLayout;
var ItemSpec = require("ui/layouts/grid-layout").ItemSpec;
var Button = require("ui/button").Button;
const AbsoluteLayout = require("tns-core-modules/ui/layouts/absolute-layout").AbsoluteLayout;
var Label = require("tns-core-modules/ui/label").Label;
var Image = require("tns-core-modules/ui/image").Image;
var LayoutBase = require("tns-core-modules/ui/layouts/layout-base");

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

exports.getMatches = function(page) {
  
  //Google Places API request here:
  return fetch("url string goes here")
      .then(handleErrors)
      .then(function(response) {
          return response.json();
      }).then(function(data) {
      //build cards
      var arrayLength = data.places.length;
      var arrayLength = 3;
      console.log(arrayLength)
      for (var i = 0; i < arrayLength; i++) {
        var border = new StackLayout();
        
        var stack = new StackLayout();
        var image = new Image();
        var nameLabel = new Label();
        image.src="~/images/mcdonalds.jpg"; //image
        nameLabel.text = "McDonalds"; //name
        nameLabel.class = "nameLabel";
        nameLabel.horizontalAlignment="left";
      
        var infoStack2 = new StackLayout();
        var infoStack = new StackLayout();
        infoStack.orientation = "horizontal";
        infoStack2.orientation = "horizontal";
        var starLabel = new Label();
        starLabel.text = "3.5"; //rating
        var starRatio = exports.getStarRatio(starLabel.text);

        starLabel.class = "info-label";
        var starImage = new Image();
        starImage.src = "~/images/stars2.png";
        starImage.class = "starImage";
        var descriptionLabel = new Label();
        descriptionLabel.text = "Fast food"; //description
        descriptionLabel.class = "info-label";
      
        var distanceLabel = new Label();
        distanceLabel.text = "1.0 mi"; //distance
        distanceLabel.class = "distance-label";
        distanceLabel.horizontalAlignment="center";
      
        infoStack.addChild(starLabel);
        infoStack.addChild(starImage);
        infoStack2.addChild(nameLabel);
        infoStack2.addChild(distanceLabel);
        
        image.stretch = "aspectFill";
      
        stack.addChild(image);
        stack.addChild(infoStack2);
        stack.addChild(descriptionLabel);
        stack.addChild(infoStack);
        border.addChild(stack);
      
        stack.class = "cardStyle";
        cards.push(border);   
      }
      page.bindingContext.foodCards = cards;
  });
}

function handleErrors(response) {
  if (!response.ok) {
      console.log(JSON.stringify(response));
      throw Error(response.statusText);
  }
  return response;
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
  console.log("Current Index:" + currIndex)
}

exports.refreshCards = function(args){
  const page = args.object.page;
  var swipeCards = page.getViewById("swipe");
  //swipeCards.items[0].unloadView();
  for(var count = 0; count < cards.length; count++){
    console.log("X:" + swipeCards.items[count].originX);
    console.log("Y:" + swipeCards.items[count].originY);
    swipeCards.items[count].animate({
        translate: { x: 0, y: 0},
        duration: 500
    });
  }
  console.log(page.bindingContext.foodCards);
  currIndex = cards.length - 1;
}

exports.getStarRatio = function(text){

  var starCount = parseFloat(text);
  var percent = ((starCount * 100) / 5) + 1;
  return "linear-gradient(to right, orange " + percent + "%, #d2d2d9 " + percent + "%)";

}

exports.loadTestCards = function(page){
  cards.push(exports.addMcDonalds());
  cards.push(exports.addJasonsDeli());
  page.bindingContext.foodCards = cards;
  currIndex = cards.length - 1;
}

exports.addMcDonalds = function(args){
  var border = new StackLayout();
  var stack = new StackLayout();
  var image = new Image();
  var nameLabel = new Label();
  image.src="~/images/mcdonalds.jpg";
  nameLabel.text = "McDonalds";
  nameLabel.class = "nameLabel";
  nameLabel.horizontalAlignment="left";

  var infoStack2 = new StackLayout();
  var infoStack = new StackLayout();
  infoStack.orientation = "horizontal";
  infoStack2.orientation = "horizontal";
  var starLabel = new Label();
  starLabel.text = "1.5";
  starLabel.class = "info-label";
  var starImage = new Image();
  starImage.src = "~/images/stars2.png";
  starImage.class = "starImage";
  starImage.backgroundImage = exports.getStarRatio(starLabel.text);

  var descriptionLabel = new Label();
  descriptionLabel.text = "Fast food";
  descriptionLabel.class = "info-label";

  var distanceLabel = new Label();
  distanceLabel.text = "1.0 mi";
  distanceLabel.class = "distance-label";
  distanceLabel.horizontalAlignment="center";

  infoStack.addChild(starLabel);
  infoStack.addChild(starImage);
  infoStack2.addChild(nameLabel);
  infoStack2.addChild(distanceLabel);
  
  image.stretch = "aspectFill";

  stack.addChild(image);
  stack.addChild(infoStack2);
  stack.addChild(descriptionLabel);
  stack.addChild(infoStack);
  border.addChild(stack);

  stack.class = "cardStyle";

  return border;

}

exports.addJasonsDeli = function(args){
  var border = new StackLayout();
  var stack = new StackLayout();
  var image = new Image();
  var nameLabel = new Label();
  image.src="~/images/JasonsDeli.jpg";
  nameLabel.text = "Jason's Deli";
  nameLabel.class = "nameLabel";
  nameLabel.horizontalAlignment="left";

  var infoStack2 = new StackLayout();
  var infoStack = new StackLayout();
  infoStack.orientation = "horizontal";
  infoStack2.orientation = "horizontal";
  var starLabel = new Label();
  starLabel.text = "3.5";
  starLabel.class = "info-label";
  var starImage = new Image();
  starImage.src = "~/images/stars2.png";
  starImage.class = "starImage";
  starImage.backgroundImage = exports.getStarRatio(starLabel.text);;

  var descriptionLabel = new Label();
  descriptionLabel.text = "Deli";
  descriptionLabel.class = "info-label";

  var distanceLabel = new Label();
  distanceLabel.text = "6.8 mi";
  distanceLabel.class = "distance-label";
  distanceLabel.horizontalAlignment="center";

  infoStack.addChild(starLabel);
  infoStack.addChild(starImage);
  infoStack2.addChild(nameLabel);
  infoStack2.addChild(distanceLabel);
  
  image.stretch = "aspectFill";

  stack.addChild(image);
  stack.addChild(infoStack2);
  stack.addChild(descriptionLabel);
  stack.addChild(infoStack);
  border.addChild(stack);

  stack.class = "cardStyle";

  return border;

}

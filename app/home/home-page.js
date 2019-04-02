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


exports.onNavigatingTo = function(args) {
  const page = args.object;
  page.bindingContext = new HomeViewModel(page.navigationContext);
  const binding = page.bindingContext;
  exports.loadTestCards(page);
  //exports.getMatches(page);
};

exports.getMatches = function(page) {
            
  var cards = [];
  
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

exports.loadTestCards = function(page){
            
  var cards = [];
  cards.push(exports.addMcDonalds());
  cards.push(exports.addJasonsDeli());
  page.bindingContext.foodCards = cards;
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
  starLabel.text = "3.5";
  starLabel.class = "info-label";
  var starImage = new Image();
  starImage.src = "~/images/stars2.png";
  starImage.class = "starImage";
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
  starLabel.text = "4.5";
  starLabel.class = "info-label";
  var starImage = new Image();
  starImage.src = "~/images/stars2.png";
  starImage.class = "starImage";
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

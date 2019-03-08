const topmost = require("ui/frame").topmost;
var SwipeEvent = require("nativescript-swipe-card");
var HomeViewModel = require("./home-view-model");


exports.onNavigatingTo = function(args) {
  const page = args.object;
  page.bindingContext = new HomeViewModel(page.navigationContext);
  const binding = page.bindingContext;
  binding.getMatches();
};

var SettingsViewModel = require("./settings-view-model");

function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = new SettingsViewModel(page.navigationContext);
  const binding = page.bindingContext;
}



function priceSelection(args) {
  const page = args.object;

  if(page.bindingContext.priceSliderValue == 1)
  {
    page.bindingContext.currentPrice = "$";
  }
  if(page.bindingContext.priceSliderValue == 2)
  {
    page.bindingContext.currentPrice = "$S";
  }
  if(page.bindingContext.priceSliderValue == 3)
  {
    page.bindingContext.currentPrice = "$SS";
  }
  if(page.bindingContext.priceSliderValue == 4)
  {
    page.bindingContext.currentPrice = "SSS$";
  }
}

function distanceSelection(args) {
  const page = args.object;

  if(page.bindingContext.priceSliderValue == 1)
  {
    page.bindingContext.currentPrice = "$";
  }
  if(page.bindingContext.priceSliderValue == 2)
  {
    page.bindingContext.currentPrice = "$S";
  }
  if(page.bindingContext.priceSliderValue == 3)
  {
    page.bindingContext.currentPrice = "$SS";
  }
  if(page.bindingContext.priceSliderValue == 4)
  {
    page.bindingContext.currentPrice = "SSS$";
  }
}

exports.priceSelection = priceSelection;
exports.distanceSelection = distanceSelection;
exports.onNavigatingTo = onNavigatingTo;
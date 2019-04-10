const observableModule = require("data/observable");
var LayoutBase = require("tns-core-modules/ui/layouts/layout-base");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        
        distanceSliderValue: 1,
        priceSliderValue: 1,
        distanceFirstMinValue: 1,
        distanceFirstMaxValue: 4,
        priceFirstMinValue: 1,
        priceFirstMaxValue: 4,
        currentPrice: "$",
        distanceVal: 5
    
    });
     
    return viewModel;
}

module.exports = SettingsViewModel;
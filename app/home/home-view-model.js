const observableModule = require("data/observable");
var LayoutBase = require("tns-core-modules/ui/layouts/layout-base");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        
        foodCards: Array<LayoutBase>=[],

        preferences: {price: 0, distance: 0, type:[]}
    
    });
     
    return viewModel;
}

module.exports = HomeViewModel;
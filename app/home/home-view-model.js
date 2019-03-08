const observableModule = require("data/observable");
var LayoutBase = require("tns-core-modules/ui/layouts/layout-base");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        
        foodCards: Array<LayoutBase>=[],
    
    });
     
    return viewModel;
}

module.exports = HomeViewModel;
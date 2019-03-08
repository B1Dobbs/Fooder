const observableModule = require("data/observable");
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
const AbsoluteLayout = require("tns-core-modules/ui/layouts/absolute-layout").AbsoluteLayout;
var Label = require("tns-core-modules/ui/label").Label;
var ImageModule = require("tns-core-modules/ui/image");
var LayoutBase = require("tns-core-modules/ui/layouts/layout-base");

function HomeViewModel(petModel) {
    const viewModel = observableModule.fromObject({
        
        pet: petModel,
        
        petCards: Array<LayoutBase>=[],
        
        getMatches : function() {

            console.log("getting matches")
            
            var cards = [];
            
            //Google Places API request here:
            // return fetch("url string goes here")
            //     .then(handleErrors)
            //     .then(function(response) {
            //         return response.json();
            //     }).then(function(data) {
                //build card - this needs to loop through data.petfinder.pets
                //var arrayLength = data.places.length;
                var arrayLength = 3;
                console.log(arrayLength)
                //for (var i = 0; i < arrayLength; i++) {
                    var border = new StackLayout();
                    var imageContainer = new AbsoluteLayout();
                    var stack = new StackLayout();
                    var image = new ImageModule.Image();
                    var nameLabel = new Label();
                    var descriptionLabel = new Label();
                    image.src="~/images/JasonsDeli.jpg";
                    nameLabel.text = "McDonalds";
                    nameLabel.class = "quicksandBoldLarge";
                    nameLabel.horizontalAlignment="center";
                    descriptionLabel.text = "Fast food";
                    descriptionLabel.textWrap = true;
                    descriptionLabel.class="quicksand";
                    descriptionLabel.alignment="top";
                    descriptionLabel.horizontalAlignment="center";
                    
                    image.stretch = "aspectFill";
                    // imageContainer.addChild(image);
                    // GridLayout.setRow(image,0);
                    // GridLayout.setRow(nameLabel,0);
                    // const firstRow = new ItemSpec(100,"star");
                    // imageContainer.addRow(firstRow);

                    stack.addChild(image);
                    stack.addChild(nameLabel);
                    stack.addChild(descriptionLabel);
                    border.addChild(stack);
                    stack.class = "cardStyle";
                    //stack.addChild(image);
                    //stack.addChild(descriptionLabel);
                    
                    cards.push(border);
                    
               // }
                viewModel.set('petCards',cards)
           // });
            
        }
    });
   
    
    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = HomeViewModel;
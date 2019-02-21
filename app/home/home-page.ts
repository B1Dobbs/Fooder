import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HomeViewModel} from './home-view-model';
import {SwipeEvent} from 'nativescript-swipe-card';
 
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HomeViewModel();
    let swipeCard = page.getViewById("swipe");
    swipeCard.on("swipeEvent", (args:SwipeEvent) => {
        if (args.direction === 1) {
                    //right
                    console.log('Swiped to right');
        } else {
                    //left
                    console.log('Swiped to left');
        }
    });
}
import { LightningElement } from 'lwc';

export default class C2pProgressBarParent extends LightningElement {

    progressValue = 0;

    parentHandler(event){
        //event.detail contains the inputValue from the child component
        this.progressValue = event.detail;
    }

}

/**Create a progress bar and a inputbox. The input for the progress bar must be passed from the Child to Parent.

Step 1 : Create Progress bar in Parent component

Step 2 : Create Input in Child Component
2.1 onchange - customevent "pass" (detail - pass the value), dispatch

Step 3 : In the Parent, <.... onpass={parentHandler}>
3.1 parentHadler, event.detail => progressbar value */
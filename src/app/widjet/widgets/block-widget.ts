import {Widget} from '../../models/widget'



export class blockWidget extends Widget{
    public properties // properties are an object that will somehow uniquely connect the widget to its real life counterpart.

    public x;
    public y;
    
    constructor( pTypeName :string,
        pLength   :number,
        pWidth    :number,
        pRotation :number,
        pScale    :number, 
        x: number, 
        y: number){
             super(pTypeName, pLength, pWidth, pRotation, pScale, x, y);
        this.svgClass = pTypeName // color of blockWidget
    }

   

    //What is an HTMLElement, a miserable little pile of secrets?
    //after further reflection the HTMLElement is not a useful value and has been depricated. 
    renderAsPath():HTMLElement{
        console.warn("renderAsPath is bad and you shouldn't be using it");

        let html = document.createElement('path');
        let pathstring = "M " + this.x+ " "+ this.y+" h "+ this.length +" v "+ this.width+ " h -"+ this.length + " v -" +this.width
        html.setAttribute('d', pathstring);

        return html;
    }

    returnPath(){
        
        let html = "<svg:path class='"+ this.svgClass+ "' d='M" + this.x+ " "+ this.y+" h "+ this.length +" v "+ this.width+ " h -"+ this.length + " v -" +this.width+ `'/>`
        return html;
    }

    //returns a string representation of a svg path variable d;
    pathAsString() : String {
        let retVal = 'M ' + this.x + ' '+ this.y + ' h ' + this.length + ' v ' + this.width +
        ' h -' + this.length + ' v -' + this.width
        return retVal;
    }


};
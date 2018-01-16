import {Widget} from '../../models/widget'



export class conveyerWidget extends Widget{
    public properties // properties are an object that will somehow uniquely connect the widget to its real life counterpart.
    public svgClass;
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
        this.svgClass = pTypeName // color of conveyerWidget

        

    }



    //What is an HTMLElement, a miserable little pile of secrets?
    renderAsPath():HTMLElement{
        let html = new HTMLElement;
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
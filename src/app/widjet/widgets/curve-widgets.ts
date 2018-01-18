import {Widget} from '../../models/widget'



export class curveWidget extends Widget{
    
    //maybe point {} would be more efficiant. but it doesn't smoothly fit in the editor. 
    bezierPointX1;
    bezierPointX2;
    bezierPointY1;
    bezierPointY2;

   // innerLength;

    constructor( pTypeName :string,
        pLength   :number,
        pWidth    :number,
        pRotation :number,
        pScale    :number, 
        x: number, 
        y: number){
             super(pTypeName, pLength, pWidth, pRotation, pScale, x, y);
        this.svgClass = pTypeName // color of blockWidget
        this.bezierPointX1 = this.bezierPointX2 = 0;
        this.bezierPointY1 = this.bezierPointY2 = 0;
        this.length = this.length*2;
        //this.innerLength = this.length/2;
    }
    

    //what we really want is a traphizoid shape, the 'sides' are curvy for effect but not really required.

    pathAsString(): String {
        
        let rval = ['M',this.x,',' ,this.y];
        rval = rval.concat(['c', this.bezierPointX1,',', this.bezierPointY2]);
        rval = rval.concat([this.bezierPointX2, ',', this.bezierPointY2]);
        rval = rval.concat([this.width*2, ',', this.length]);

        //rval = rval.concat(['M', this.x ,',', this.y ,'l', 0 , ',' ,this.width]);
        //rval = rval.concat(['M', this.x+this.width, ',', this.y, 'l', 0, ',', this.innerLength]);

        rval = rval.concat(['M',this.x,',' ,this.y+this.width]);
        rval = rval.concat(['c', this.bezierPointX1,',', this.bezierPointY2]);
        rval = rval.concat([this.bezierPointX2, ',', this.bezierPointY2]);
        rval = rval.concat([(this.width), ',', this.length/2]);

        return rval.join(' ');
    };

}

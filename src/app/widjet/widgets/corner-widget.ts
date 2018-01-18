
/*curves are hard, this corner piece should have some additional details to help its orientation. 

*/
import {Widget} from '../../models/widget'

export class cornerWidget extends Widget{
 

    svgClass;

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

    pathAsString(): String {
        let svgArray = ['M', this.x, ',' this.y, 'h', this.length, 'v', this.width, 'L', this.x , ',', this.y]
        svgArray = svgArray.concat(['v', this.width, 'h', this.length])

        
        let retVal = svgArray.join(' ')
        return retVal;
    }


}
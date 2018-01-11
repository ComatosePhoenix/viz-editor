export class Settings
{
    public defPageHeight        :number;    // Default Layout Page height: pixels
    public defPageWidth         :number;    // Default Layout Page width: pixels
    public defScale             :number;    // Default equipment scale: px/inch
    public defConveyorWidthIn   :number;    // Default conveyor width: inches

    constructor ( pDefPageHeight      :number = 600,
                  pDefPageWidth       :number = 1200,
                  pDefScale           :number = 3,
                  pDefConveyorWidthIn :number = 24
                )
    {
        this.defPageHeight      = pDefPageHeight;
        this.defPageWidth       = pDefPageWidth;
        this.defScale           = pDefScale;
        this.defConveyorWidthIn = pDefConveyorWidthIn
    }

    public static get displayables() :{ name :string,
                                        isEditable :boolean }[]
    {
        return [ { name: 'defPageHeight',      isEditable: true },
                 { name: 'defPageWidth',       isEditable: true },
                 { name: 'defScale',           isEditable: true },
                 { name: 'defConveyorWidthIn', isEditable: true },
        ]
    }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Widget } from '../models/widget';
import { conveyerWidget } from './widgets/conveyer-widget';
import { EditPropertiesComponent } from '../edit-properties/edit-properties.component';
import { IEditListItem } from '../interfaces/i-edit-list-item';


@Component({
  selector: '[app-widjet]',
  templateUrl: './widjet.component.html',
  styleUrls: ['./widjet.component.scss']
})

//Yes I should have named it widget manager, I think I butched the spelling of my pun anyway. 
export class WidjetComponent implements OnInit {
  private widgets : Widget[];
  
  
  constructor( private _dialog :MatDialog){
    this.widgets = [];
    let placeholderWidget = new conveyerWidget('test', 100, 100, 0 , 1, 100, 100);

    this.widgets.push(placeholderWidget);
  }

  createWidget(type){
    let newWidget;
    switch (type){
      case 'RolrStr':  newWidget = new conveyerWidget('RolrStr', 100, 100, 0 , 1, 100, 100); break;
      case 'RolrCur':  newWidget = new conveyerWidget('RolrCur', 100, 100, 0 , 1, 100, 100); break;
      case 'BeltStr':  newWidget = new conveyerWidget('BeltStr', 100, 100, 0 , 1, 100, 100); break;
      case 'BeltCur':  newWidget = new conveyerWidget('BeltCur', 100, 100, 0 , 1, 100, 100); break;
      default: console.error('unrecognized widget type'); break;
    }

    this.widgets.push(newWidget);
  }


  renderWidgets(){

  }


  ngOnInit() {
    console.log('Widjet rendering');
    console.log(this.widgets);
  }

  clickAndDrag(k){
    let widget = this.widgets[k];
    if (widget.isSelected){
      widget.isSelected = false;
      this.releaseWidget(widget);
    }else{
      widget.isSelected = true;
      this.grabWidget(widget)
    }
  }

  grabWidget(widget) {
    widget.stickToMouse();
  }

  releaseWidget(widget){
    widget.unStick();
  }

  edit(k){
    console.log('editing widget ' + k);
    let widget = this.widgets[k];
    let keys = Object.keys(widget);
    let data : IEditListItem[] = [];
    keys.forEach(function(d){
      data.push({name: d, value:widget[d], isEditable: true})
    })

    let dialogRef = this._dialog.open(EditPropertiesComponent,
      { minWidth: '350px', maxHeight: '600px',
        data: data
      });
    
    dialogRef.afterClosed().subscribe(result =>
      {
        console.log(`widjetComponent.editDiaglog.dialogRef.afterClosed(): result = '${result}'`);
        if (result)
        { 
          result.forEach(function(k){
            widget[k.name]= k.value; 
          })
          console.log(result);
        }
    });
  }

}



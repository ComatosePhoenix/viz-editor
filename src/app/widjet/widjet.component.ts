import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Widget } from '../models/widget';
import { blockWidget } from './widgets/block-widget';
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
    let placeholderWidget = new blockWidget('test', 100, 100, 0 , 1, 100, 100);

    this.widgets.push(placeholderWidget);
  }

  createWidget(type){
    let newWidget;
    switch (type){
      case 'RolrStr':  newWidget = new blockWidget('RolrStr', 100, 100, 0 , 1, 100, 100); break;
      case 'RolrCur':  newWidget = new blockWidget('RolrCur', 100, 100, 0 , 1, 100, 100); break;
      case 'BeltStr':  newWidget = new blockWidget('BeltStr', 100, 100, 0 , 1, 100, 100); break;
      case 'BeltCur':  newWidget = new blockWidget('BeltCur', 100, 100, 0 , 1, 100, 100); break;
      default: console.error('unrecognized widget type'); break;
    }

    this.widgets.push(newWidget);
  }


  private renderWidgets(){
    this.widgets.forEach(function(widget){
      this._svgTarget.append(widget.renderAsPath);
    })

  }


  ngOnInit() {
    console.log('Widjet rendering');
    console.log(this.widgets);
  }

  //this was dumb,pretend I never wrote it.
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


  delete(k){
    this.widgets.splice(k,1);
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
      { minWidth: '350px', maxWidth: '500px', maxHeight: '600px',
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



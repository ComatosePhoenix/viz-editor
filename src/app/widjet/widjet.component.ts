import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Widget } from '../models/widget';
import { conveyerWidget } from './widgets/conveyer-widget';
import { EditSettingsComponent } from '../edit-settings/edit-settings.component';
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
      case 'rollStr': break;
      default: newWidget = new conveyerWidget('test2', 200, 200, 0 , 1, 100, 100);
    }

    newWidget = new conveyerWidget('test2', 200, 200, 0 , 1,  100, 100);

    this.widgets.push(newWidget);
  }


  renderWidgets(){

  }


  ngOnInit() {
    console.log('Widjet rendering');
    console.log(this.widgets);
  }

  edit(k){
    console.log('editing widget ' + k);
    let widget = this.widgets[k];
    let keys = Object.keys(widget);
    let data : IEditListItem[] = [];
    keys.forEach(function(d){
      data.push({name: d, value:widget[d], isEditable: true})
    })

    let dialogRef = this._dialog.open(EditSettingsComponent,
      { minWidth: '350px', maxHeight: '600px',
        data: data
      });
    
    dialogRef.afterClosed().subscribe(result =>
      {
        console.log(`widjetComponent.editDiaglog.dialogRef.afterClosed(): result = '${result}'`);
        if (result)
        { 
          keys.forEach(function(k){
            widget[k]= result[k]; 
          })
          console.log(result);
        }
    });
  }

}



import { Component, Inject }                        from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AbstractControl}                           from '@angular/forms';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType}                from '@covalent/dynamic-forms';
import { MatFormFieldModule }                       from '@angular/material/form-field';
import { MatInputModule}                            from '@angular/material/input';

import { IEditListItem }                            from '../interfaces/i-edit-list-item';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-edit-properties',
  templateUrl: './edit-properties.component.html',
  styleUrls: ['./edit-properties.component.scss']
})
export class EditPropertiesComponent
{

  public settingsList :IEditListItem[];
  public dynamicSettingsList;
  constructor(public dialogRef :MatDialogRef<EditPropertiesComponent>,
              @Inject(MAT_DIALOG_DATA) public data :IEditListItem[])
  {
    this.settingsList = data;
    this.dynamicSettingsList = this.formatConfig(data);
  }

  
  
  save(data): void{
    console.log(data.value); //data example : {defPageHeight: "1000", defPageWidth: 1200, defScale: 3, defConveyorWidthIn: 24}
    let rArray = []; 
    this.settingsList.forEach(function(element){
      if (data.value[element.name]){
        element.value = data.value[element.name];
        rArray.push(element);
      }});
    this.dialogRef.close(rArray);
  }

  formatConfig(obj: {name: string, value: string | number | boolean}[]) : ITdDynamicElementConfig[]{
    let rVal : ITdDynamicElementConfig[] = [];
    
    obj.forEach(element => {
      rVal.push({name: element.name, label: element.name, type: TdDynamicType.Text, default: element.value});
      
    });

    return rVal;
  }

  onNoClick(): void
  {
    this.dialogRef.close();
  }
}

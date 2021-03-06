import { Component, ViewEncapsulation }             from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { IEditListItem }                            from '../interfaces/i-edit-list-item';
import { EditPropertiesComponent }                  from '../edit-properties/edit-properties.component';
import { LayoutTabsComponent }                      from '../layout-tabs/layout-tabs.component';
import { Settings }                                 from '../models/settings';
import { SettingsService }                          from '../settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ '../globals/styles/_colors.scss', './menu.component.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class MenuComponent {

  constructor( private _dialog :MatDialog,
               private _settingsService :SettingsService )
  { }

  layoutTabsComponent :LayoutTabsComponent;           // Set by AppComponent

  public selectedMenuItem :string;                    // The label of the selected menu item

  public alignMenuItems = [
    { id: 'alignMenu_Left',     label: 'Left'   },
    { id: 'alignMenu_Center',   label: 'Center' },
    { id: 'alignMenu_Right',    label: 'Right'  },
    { id: 'alignMenu_Sep1',     label: null     },
    { id: 'alignMenu_Top',      label: 'Top'    },
    { id: 'alignMenu_Middle',   label: 'Middle' },
    { id: 'alignMenu_Bottom',   label: 'Bottom' },
  ];

  public editMenuItems = [
    { id: 'editMenu_Copy',       label: 'Copy'       },
    { id: 'editMenu_Paste',      label: 'Paste'      },
    { id: 'editMenu_Sep1',       label: null         },
    { id: 'editMenu_Cut',        label: 'Cut'        },
    { id: 'editMenu_Delete',     label: 'Delete'     },
    { id: 'editMenu_Sep2',       label: null         },
    { id: 'editMenu_Settings',   label: 'Settings'   },
    { id: 'editMenu_LayoutPage', label: 'Layout Page'}
  ];
  
  public fileMenuItems = [
    { id: 'fileMenu_Open',      label: 'Open'       },
    { id: 'fileMenu_New',       label: 'New'        },
    { id: 'fileMenu_Save',      label: 'Save'       },
    { id: 'fileMenu_SaveAs',    label: 'Save As...' },
    { id: 'fileMenu_Sep1',      label: null         },
    { id: 'fileMenu_Import',    label: 'Import...'  },
    { id: 'fileMenu_Export',    label: 'Export...'  },
  ];

  public lengthMenuItems = [
    { id: 'lengthMenu_+1',      label: '+1px'  },
    { id: 'lengthMenu_+5',      label: '+5px'  },
    { id: 'lengthMenu_+25',     label: '+25px' },
    { id: 'lengthMenu_Sep1',    label: null    },
    { id: 'lengthMenu_-1',      label: '-1px'  },
    { id: 'lengthMenu_-5',      label: '-5px'  },
    { id: 'lengthMenu_-25',     label: '-25px' },
  ];

  public rotateMenuItems = [
    { id: 'rotateMenu_+1',      label: '+1°'  },
    { id: 'rotateMenu_+10',     label: '+10°' },
    { id: 'rotateMenu_+45',     label: '+45°' },
    { id: 'rotateMenu_+90',     label: '+90°' },
    { id: 'rotateMenu_Sep1',    label: null   },
    { id: 'rotateMenu_-1',      label: '-1°'  },
    { id: 'rotateMenu_-10',     label: '-10°' },
    { id: 'rotateMenu_-45',     label: '-45°' },
    { id: 'rotateMenu_-90',     label: '-90°' },
  ];

  public widgetMenuItems = [
    { id: 'widgetMenu_RolrStr', label: 'Roller Conveyor, Straight'  },
    { id: 'widgetMenu_RolrCur', label: 'Roller Conveyor, Curved'    },
    { id: 'widgetMenu_Sep1',    label: null                         },
    { id: 'widgetMenu_BeltStr', label: 'Belt Conveyor, Straight'    },
    { id: 'widgetMenu_BeltCur', label: 'Belt Conveyor, Curved'      },
  ];

  public widthMenuItems = [
    { id: 'widthMenu_+1',       label: '+1px' },
    { id: 'widthMenu_+2',       label: '+2px' },
    { id: 'widthMenu_+5',       label: '+5px' },
    { id: 'widthMenu_Sep1',     label: null   },
    { id: 'widthMenu_-1',       label: '-1px' },
    { id: 'widthMenu_-2',       label: '-2px' },
    { id: 'widthMenu_-5',       label: '-5px' },
  ];

  /*
   * Call the appropriate function for the selected menu item.
   */
  private menuDispatch(pMenuItem :string)
  {
    console.log("menuDispatch(): pMenuItem = '" + pMenuItem +  "'")
  
    this.selectedMenuItem = pMenuItem;

    switch (pMenuItem)
    {
      case "alignMenu_Left":
        break;

      case "alignMenu_Center":
        break;

      case "alignMenu_Right":
        break;

      case "alignMenu_Top":
        break;

      case "alignMenu_Middle":
        break;

      case "alignMenu_Bottom":
        break;

      case "editMenu_Copy":
        break;

      case "editMenu_Cut":
        break;

      case "editMenu_Delete":
        break;

      case "editMenu_Paste":
        break;
      
      case "editMenu_LayoutPage":
        this.layoutTabsComponent.editLayoutPage();
        break;

      case "editMenu_Settings":
        this.openEditSettingsDialog();
        break;

      case "fileMenu_New":
        break;

      case "fileMenu_Save":
        break;

      case "fileMenu_SaveAs":
        break;

      case "fileMenu_Import":
        break;

      case "fileMenu_Export":
      break;

      case "helpMenu_About":
        break;

      case "insertMenu_Page":
        this.layoutTabsComponent.addLayoutPage();
        break;

      case "lengthMenu_+1":
        break;

      case "lengthMenu_+5":
        break;

      case "lengthMenu_+25":
        break;

      case "lengthMenu_-1":
        break;

      case "lengthMenu_-5":
        break;

      case "lengthMenu_-25":
        break;

      case "mainMenu_TabPrev":
        this.layoutTabsComponent.stepToTab(-1);
        break;

      case "mainMenu_TabNext":
        this.layoutTabsComponent.stepToTab(1);
        break;

      case "mainMenu_stepDefaultScale":
        this.layoutTabsComponent.stepDefaultScale();
        break;
      
      case "mainMenu_resetSettings":
        this._settingsService.restoreDefaultSettings();
        console.log(`MenuComponent.menuDispatch(): this._settingsService.restore.DefaultSettings() invoked`)
        break;

      case "rotateMenu_+1":
        break;

      case "rotateMenu_+10":
        break;

      case "rotateMenu_+45":
        break;

      case "rotateMenu_+90":
        break;

      case "rotateMenu_-1":
        break;

      case "rotateMenu_-10":
        break;

      case "rotateMenu_-45":
        break;

      case "rotateMenu_-90":
        break;

      case "widgetMenu_RolrStr":
        break;

      case "widgetMenu_RolrCur":
        break;

      case "widgetMenu_BeltStr":
        break;

      case "widgetMenu_BeltCur":
        break;

      case "widthMenu_+1":
        break;

      case "widthMenu_+2":
        break;

      case "widthMenu_+5":
        break;

      case "widthMenu_-1":
        break;

      case "widthMenu_-2":
        break;

      case "widthMenu_-5":
        break;
    }
  }

  /*
   * Open the EditProperties dialog using the settings we
   * retrieve from the SettingsService. If the dialog is
   * successfully completed, the updated settings values
   * are used to update the current settings, as maintained
   * by the SettingsService.
   */
  openEditSettingsDialog() :void
  {
    let settingsList = this._settingsService.getSettingsList();
    let dialogRef = this._dialog.open(EditPropertiesComponent,
                                      { minWidth: '350px', maxHeight: '600px',
                                        data: settingsList 
                                      });

    dialogRef.afterClosed().subscribe(result =>
      {
        console.log(`MenuComponent.openEditSettingsDialog.dialogRef.afterClosed(): Begins; result = '${JSON.stringify(result)}'`);
        if (result)
        {
          this._settingsService.updateSettingsFromList(result);
        }

        console.log(`MenuComponent.openEditSettingsDialog.dialogRef.afterClosed(): Ends`);
      });
  }
}

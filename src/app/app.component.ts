import { Component, OnInit }          from '@angular/core';
import { AfterViewInit, ViewChild }   from '@angular/core';
import { HostListener }               from '@angular/core';

import { LayoutTabsComponent }        from './layout-tabs/layout-tabs.component';
import { MenuComponent }              from './menu/menu.component';
import { Settings }                   from './models/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './globals/styles/_colors.scss', './app.component.scss' ]
})

export class AppComponent implements OnInit, AfterViewInit {
  public title = 'Visualization Editor';

  @ViewChild(LayoutTabsComponent)
  private _layoutTabsComponent: LayoutTabsComponent;

  @ViewChild(MenuComponent)
  private _menuComponent: MenuComponent;

  constructor()
  { }

  ngOnInit()
  { }
 
  ngAfterViewInit()
  {
    // Let the menu component access functions belonging to the layout tabs component
    this._menuComponent.layoutTabsComponent = this._layoutTabsComponent;
  }

  @HostListener('document:keydown', ['$event'])

  /*
   *  The app's hot-key detector and dispatcher.
   *  N.B.: The browser's hot keys are disabled here.
   */
  public checkForHotKey(pEvent: KeyboardEvent)
  {
    console.log(`AppComponenet.checkForHotKey: ` +
                `pEvent.char='${pEvent.char}', ` +
                `pEvent.key='${pEvent.key}', ` +
                `pEvent.ctrlKey='${pEvent.ctrlKey}', ` +
                `pEvent.altKey='${pEvent.altKey}', ` +
                `pEvent.shiftKey='${pEvent.shiftKey}'`);
    if (pEvent.cancelable)
    {
      // pEvent.preventDefault();
    }
  }
}

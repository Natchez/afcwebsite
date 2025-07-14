import {
  AfterViewInit,
  Component,
  ElementRef, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {RouterOutlet} from '@angular/router';

// import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected panelWidth = 0;
  protected title = 'afcwebsite';

  @ViewChildren('myTriggerBtn') allTriggerBtns!: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChildren(MatMenuTrigger) menuTriggers!: QueryList<MatMenuTrigger>;

  ngAfterViewInit() {
    this.menuTriggers
      .forEach((trigger, i) => {
        trigger.menuOpened.subscribe(() => {

          // Grab all Btns width if they exist
          const btn = this.allTriggerBtns.get(i)?.nativeElement;
          if (!btn) return;

          const width = btn.offsetWidth;
          console.log(width);

          // Delay calculation so menu can load
          setTimeout(() => {
            const panes = document.querySelectorAll('.mat-mdc-menu-content');
            const pane = panes[panes.length - 1] as HTMLElement;

            if (pane) {
              pane.style.width = `${width}px`;
            } else {
              console.log('not found');
            }

          }, 0);
        });
      });
  }
}


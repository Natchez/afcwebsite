import {
  AfterViewInit,
  Component, ElementRef,
  Input, QueryList,
  ViewChildren
} from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';

export interface ProjectInterface {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: { name: string; url: string }[];
  app?: string;
}

@Component({
  selector: 'nd-project',
  imports: [MatMenuModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project implements AfterViewInit{

  @Input() project!: ProjectInterface;

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

import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsile-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4 clas="well-title"> {{title}}</h4>
      <<ng-content></ng-content>

    </div>

  `
})

export class CollapsileWellComponent {
  @Input() title: string;
  visbile: boolean = true;

  toggleContent() {
    this.visbile = !this.visbile;
  }
}

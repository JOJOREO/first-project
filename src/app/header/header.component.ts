import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  @Output() featureSelected = new EventEmitter<String>();
  trigger = false;
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

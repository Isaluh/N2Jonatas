import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconChangeComponent } from "../../Icons/icon-change/icon-change.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'ButtonsComponent',
  standalone: true,
  imports: [IconChangeComponent, NgIf],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() text = ''
  @Input() variantColor = ''
  @Input() icon = ''
  @Output() eventoBotao = new EventEmitter()

  eventButtonClique(){
    this.eventoBotao.emit()
  }
}

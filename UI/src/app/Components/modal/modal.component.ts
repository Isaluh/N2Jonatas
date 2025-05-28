import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'ModalComponent',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() variantColor = ''
  @Output() fecharModalEvent = new EventEmitter()

  fecharModal(){
    this.fecharModalEvent.emit(false)
  }
}

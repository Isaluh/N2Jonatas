import { Component, Input } from '@angular/core';

@Component({
  selector: 'InputsLabelComponent',
  standalone: true,
  imports: [],
  templateUrl: './inputs-label.component.html',
  styleUrl: './inputs-label.component.css'
})
export class InputsLabelComponent {
  @Input() text = ''
  @Input() tipoInput = ''
  @Input() idInput = ''
  @Input() placeholder = ''
}

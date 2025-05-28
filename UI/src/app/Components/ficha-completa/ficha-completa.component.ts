import { Component, Input } from '@angular/core';
import { IconChangeComponent } from "../../Icons/icon-change/icon-change.component";

@Component({
  selector: 'fichaCompletaComponent',
  standalone: true,
  imports: [IconChangeComponent],
  templateUrl: './ficha-completa.component.html',
  styleUrl: './ficha-completa.component.css'
})
export class FichaCompletaComponent {
 @Input() titulo = '';
 @Input() icon = '';
 @Input() text = '';
 @Input() descricao = ''
 @Input() variantColor = ''
}

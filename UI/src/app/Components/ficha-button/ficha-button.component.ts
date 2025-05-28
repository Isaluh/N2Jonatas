import { Component, Input } from '@angular/core';
import { IconChangeComponent } from '../../Icons/icon-change/icon-change.component';
import { ButtonsComponent } from "../buttons/buttons.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'FichaButtonComponent',
  standalone: true,
  imports: [IconChangeComponent, ButtonsComponent, RouterLink],
  templateUrl: './ficha-button.component.html',
  styleUrl: './ficha-button.component.css'
})
export class FichaButtonComponent {
  @Input() titulo = '';
  @Input() icon = '';
  @Input() descricao = ''
  @Input() textButton = '';
  @Input() variantColor = ''
  @Input() rota = ''
}

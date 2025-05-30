import { NgFor, NgIf } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Livro, Usuario } from '../../Models/models';

@Component({
  selector: 'InputSelectButtonComponent',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './input-select-button.component.html',
  styleUrl: './input-select-button.component.css',
  providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputSelectButtonComponent),
        multi: true
      }
    ]
})
export class InputSelectButtonComponent implements ControlValueAccessor {
  @Input() titulo = ''
  @Input() placeholder = ''
  @Input() livros : Livro[] = []
  @Input() usuarios : Usuario[] = []

  listagem = ''
  valor: any = null;

  onChange = (valor: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.valor = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedId = +input.value;
    
    if (this.listagem === 'Livro') {
      this.valor = this.livros.find(livro => livro.id === selectedId) || null;
    } else if (this.listagem === 'Usuário') {
      this.valor = this.usuarios.find(user => user.id === selectedId) || null;
    }

    this.onChange(this.valor);
    this.onTouched();
    this.listagem = ''
  }
}

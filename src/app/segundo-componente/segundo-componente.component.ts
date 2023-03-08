import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "06-05-1999";
  urlImagem = "/assets/joão.webp";

  mostrarDataNascimento(){
    alert(`A data de nascimento do João é: ${this.dataNascimento}`)
  };
  
}

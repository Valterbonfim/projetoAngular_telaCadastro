
import { Component, Input, OnInit } from '@angular/core';
import { funcionarios } from '../model/funcionarios';
import { diretores } from '../model/diretores';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor() { }

  

  valor!: number;
  exibeTabela:  boolean = false;

  listaFuncionarios: funcionarios[] = [
    { nome: 'Joana', idade: 25, email: 'joana.taruma@gmail.com', curso: 'Analista Sistema' },
    { nome: 'Paulo', idade: 25, email: 'paulo.jose@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Maria', idade: 31, email: 'maria.oliveira@gmail.com', curso: 'Programadora' },
    { nome: 'Ricardo', idade: 39, email: 'ricardo.martins@gmail.com', curso: 'Tecnico da Informação' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }


    valor1!: Number;
    exibeTabela1: boolean = false;

    
  listaDiretores: diretores[] = [
    { nome:'Carlos Alberto', idade: 60,  email:'carlos.alberto@gmail.com',},
    { nome:'Luis Carlos', idade: 45,  email:'luis.carlos@gmail.com',},
    { nome:'Bruna Meire', idade: 30,  email:'bruna.meire@gmail.com',},
    { nome:'Leticia Carla', idade: 28,  email:'leticia.carla@gmail.com',},

  ];

  }




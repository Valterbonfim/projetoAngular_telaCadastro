import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-diretores',
  templateUrl: './diretores.component.html',
  styleUrls: ['./diretores.component.css']
})
export class DiretoresComponent implements OnInit {

  constructor() { }
    ngOnInit(): void {
    
    }

  @Input() valorInicial1: number = 4;

}

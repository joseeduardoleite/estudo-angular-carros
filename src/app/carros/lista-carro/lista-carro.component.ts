import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carros.service';

@Component({
  selector: 'app-lista-carro',
  templateUrl: './lista-carro.component.html'
})
export class ListaCarroComponent implements OnInit {

  constructor(private carroService: CarroService, ) { }
  
  public carros!: Carro[];
  
  ngOnInit() {
    this.carroService.obterCarros().subscribe(carros => {
      this.carros = carros.map(x => {
        return new Carro(x.id, x.marca, x.modelo, x.preco, x.oferta, x.precoOferta, x.imagem)
      });
    });
  }
}

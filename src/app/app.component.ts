import { Veiculo } from './interface/veiculo.interface';
import { VeiculoService } from './service/veiculo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  veiculos: Veiculo[] = []

  constructor(private serviceVeiculo: VeiculoService){}

  ngOnInit(): void{
  }
  
  getVeiculos(){
    this.serviceVeiculo.getVeiculo().subscribe((data) => { this.veiculos = data;});
  }

  postVeiculo(veiculo: Veiculo){
    this.serviceVeiculo.postVeiculo(veiculo).subscribe((data) => {console.log(data)});
  }

  deleteVeiculo(id: number){
    this.serviceVeiculo.deleteVeiculo(id).subscribe((data) => {console.log(data)});
  }

  alteraVeiculo(veiculo: Veiculo, id: number){
    this.serviceVeiculo.alterarVeiculo(veiculo, id).subscribe((data) => {console.log(data)});
  }
}

import { AmbienteService } from './../../service/ambiente.service';
import { Ambiente } from './../../interface/ambiente.interface';
import { VeiculoService } from './../../service/veiculo.service';
import { Veiculo } from './../../interface/veiculo.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  


  ambiente = new FormControl('');
  ambienteList: string[] = [];

  constructor(private veiculoService: VeiculoService,
    private ambienteService: AmbienteService) { }
  
  veiculo: Veiculo = {marca: '', modelo: '', placa: '', quilometragem: 0, ambiente: 0};

  ngOnInit(): void {
    this.getAmbientes();
  }

  addForm = new FormGroup({
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    placa: new FormControl('', Validators.required),
    quilometragem: new FormControl('', Validators.required),
    ambiente: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.log('submit', this.addForm.value)
    this.veiculo = {
      marca: this.addForm.value.marca?.toString(),
      modelo: this.addForm.value.modelo.toString(),
      placa: this.addForm.value.placa.toString() ,
      quilometragem: Number(this.addForm.value.quilometragem),
      ambiente: Number(this.addForm.value.ambiente)
    };
    console.log('veiculo', this.veiculo)
      this.veiculoService.postVeiculo(this.veiculo).subscribe((data) => {console.log(data)});
  }

  getAmbientes(): void {
    this.ambienteService.getAmbiente()
      .subscribe((data) => this.ambienteList = data.map( d => d.id));
    }

}

import { Veiculo } from './../../interface/veiculo.interface';
import { VeiculoService } from './../../service/veiculo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-alteracao',
  templateUrl: './veiculo-alteracao.component.html',
  styleUrls: ['./veiculo-alteracao.component.css']
})
export class VeiculoAlteracaoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private veiculoService: VeiculoService) {}
  
  veiculo: Veiculo = {marca: '', modelo: '', placa: '', quilometragem: 0, ambiente: 0};
  identificador: number = 0;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.identificador =  params['id']
    }); 
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
      this.veiculoService.alterarVeiculo(this.veiculo, this.identificador).subscribe((data) => {console.log(data)});
    // this.addForm.reset();
  }

}

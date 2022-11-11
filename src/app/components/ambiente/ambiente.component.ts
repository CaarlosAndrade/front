import { AmbienteService } from '../../service/ambiente.service';
import { Ambiente } from '../../interface/ambiente.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.css']
})

export class AmbienteComponent implements OnInit {

  constructor(private ambienteService: AmbienteService) { }
  
  ambiente: Ambiente = {bairro: '', cidade: '', estado: '', temperatura: 0, qualidadeDoAr: ''}

  ngOnInit(): void {
  }

  addForm = new FormGroup({
    bairro: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    temperatura: new FormControl('', Validators.required),
    qualidadeDoAr: new FormControl('', Validators.required),
  });

  
  onSubmit(){
    console.log('submit', this.addForm.value)
    this.ambiente = {
      bairro: this.addForm.value.bairro.toString(),
      cidade: this.addForm.value.cidade.toString(),
      estado: this.addForm.value.estado.toString() ,
      temperatura: Number(this.addForm.value.temperatura),
      qualidadeDoAr: this.addForm.value.qualidadeDoAr.toString(),
    };
    console.log('veiculo', this.ambiente)
      this.ambienteService.postAmbiente(this.ambiente).subscribe((data) => {console.log(data)});
    // this.addForm.reset();
  }

}

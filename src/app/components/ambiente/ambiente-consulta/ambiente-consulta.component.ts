import { Ambiente } from './../../../interface/ambiente.interface';
import { MatTableDataSource } from '@angular/material/table';
import { AmbienteService } from './../../../service/ambiente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente-consulta',
  templateUrl: './ambiente-consulta.component.html',
  styleUrls: ['./ambiente-consulta.component.css']
})
export class AmbienteConsultaComponent implements OnInit {

  dataSource = new MatTableDataSource<Ambiente[]>();

  constructor(private AmbienteService: AmbienteService) { }

  ngOnInit(): void {
    this.getAmbientes()
  }

  getAmbientes(): void {
    this.AmbienteService.getAmbiente()
      .subscribe((data) => { this.dataSource.data = data;});
    }

}

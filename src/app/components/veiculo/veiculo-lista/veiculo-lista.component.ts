import { Veiculo } from './../../../interface/veiculo.interface';
import { VeiculoService } from './../../../service/veiculo.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-veiculo-lista',
  templateUrl: './veiculo-lista.component.html',
  styleUrls: ['./veiculo-lista.component.css']
})
export class VeiculoListaComponent implements OnInit {

  dataSource = new MatTableDataSource<Veiculo[]>();

  constructor(private veiculoService: VeiculoService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getveiculos();
  }

  getveiculos(): void {
    this.veiculoService.getVeiculo()
      .subscribe((data) => { this.dataSource.data = data;});
      this.changeDetectorRefs.detectChanges();
    }
    
    deleteVeiculo(id: number){
      this.veiculoService.deleteVeiculo(id).subscribe((data)=> {console.log(data)})
      this.getveiculos()
      this.changeDetectorRefs.detectChanges();
      location.reload()
  }
}

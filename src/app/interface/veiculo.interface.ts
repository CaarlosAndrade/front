import { Ambiente } from './ambiente.interface';
export interface Veiculo{
  id?: number,
  marca: string,
  modelo: string,
  placa: string,
  quilometragem: number,
  ambiente: number
}
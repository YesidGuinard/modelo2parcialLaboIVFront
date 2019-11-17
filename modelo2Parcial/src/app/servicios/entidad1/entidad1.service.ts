import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Entidad } from '../../clases/entidad'; 


@Injectable({
  providedIn: 'root'
})
export class Entidad1Service {

  constructor(private HttpService: HttpService) { }

  AltaEntidad(entidad: Entidad) {
    return this.HttpService.httpPost0('entidad/', entidad);
  }
}

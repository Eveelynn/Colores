import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private httpClient: HttpClient) { }

  async obtenerColores(page){
    try{
      return await this.httpClient.get(`https://reqres.in/api/colors?page=${page}`).toPromise();
    }
    catch(error){
      let data = { "error": "error al consumir" };
      return data;
    }
  }
}

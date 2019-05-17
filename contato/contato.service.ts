import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class ContatoService {

  private api: string = `${environment.api}/contato`;

  constructor(
    private http: HttpClient
  ) { }



  list() {
      return this.http.get(this.api);
  }

  get(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  saveOrUpdate(payload) {
    return this.http.post(this.api, payload);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

}
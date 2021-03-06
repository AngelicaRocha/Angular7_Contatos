import { Injectable } from '@angular/core';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private localStorage: LocalStorageService) { }

  delete(contato: Contato){
    this.localStorage.remove(contato.id);
  }

  save(contato: Contato){
    this.localStorage.set(contato.id, contato)
  }

  getContato(id: string): Contato {
    return this.localStorage.get(id);
  }

  getAll(): Contato[]{
    return this.localStorage.keys().map(id => this.getContato(id));
  }

}

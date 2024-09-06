import { Injectable } from '@angular/core';
import { RecepiesData } from '../../public/data/recepies';
import { RecepieInterface } from './interfaces/recepie-interface';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  constructor() { }

  getAllRecepies () : RecepieInterface [] {
    return RecepiesData.recepieList
  }

  getRecepiesById (id:Number) : RecepieInterface | undefined {
    return RecepiesData.recepieList.find(recepie => recepie.id === id); 
  }
}

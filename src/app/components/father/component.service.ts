import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(){}
  value = 0;
  add() {
    this.value++;
    console.log(this.value.toString());
  }
}

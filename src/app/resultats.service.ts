import { Injectable } from '@angular/core';
import { test } from '../assets/resultats.json';

@Injectable({
  providedIn: 'root'
})
export class ResultatsService {

  private resulats: any[] = test;

  constructor() { }

  getAll(): any[] {
    return this.resulats;
  }

  // getTopEnfant(){
  //   let returnVal: any[] = [];
  //   let i = 0;
  //   for (let result1: any of this.resulats){
  //     for (let result2: any of this.resulats){
  //       if (result1.enfant >= result2.enfant){
  //         returnVal[i] = result1;
  //       } else {
  //         i++;
  //       }
  //     }
  //   }
  // }

  // getTopEnfant(): any[]{
  //   let returnval: any[] = [];
  //   let i:number = 0;
  //   let j:number = i+1;
  //   for (let results of this.resultats) {
  //
  //     if (results.enfant > )
  //
  //   }
  // }
}

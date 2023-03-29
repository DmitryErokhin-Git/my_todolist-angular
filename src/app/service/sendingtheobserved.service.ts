import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendingtheobservedService implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // this.GetObservable()
  }

  // dataObservable: any
  // dataPull: any

  // public GetObservable() {
  //   this.dataObservable = new Observable(res => {
  //     console.log("Observable is started")
  //     res.next('0')
  //     setTimeout(() => { res.next('1') }, 1000);
  //     setTimeout(() => { res.next('2') }, 1500);
  //     setTimeout(() => { res.next('3') }, 2500);
  //     setTimeout(() => { res.next('4') }, 3000);
  //     setTimeout(() => { res.complete() }, 3001);
  //     // setTimeout(() => { res.error(new Error("error 3")) }, 3000);
  //     console.log("Observable is stoped")
  //   })
  // }

}


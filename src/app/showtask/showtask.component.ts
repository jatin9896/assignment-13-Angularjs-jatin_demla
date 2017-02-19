import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
@Component({
 selector: 'showtask',
 templateUrl: './app/showtask/showtask.component.html',
 styleUrls: [''],

})
export class Showtaskcomponent implements OnInit{

 detail:Detail[]
 constructor(private service:DetailService)
 {
  this.detail=this.service.detail
 }
 ngOnInit(){
  this.detail=this.service.detail
 }


}
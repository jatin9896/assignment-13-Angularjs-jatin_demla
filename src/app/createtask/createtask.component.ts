import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
@Component({
 selector: 'createtask',
 templateUrl: './app/createtask/createtask.component.html',
 styleUrls: ['']
})
export class Createtaskcomponent implements OnInit{
 detail:Detail[]
 constructor(private service:DetailService)
 {
   this.detail=this.service.detail
 }
 ngOnInit(){
  this.detail=this.service.detail   
 }
 submit(date:string,title:string,desc:string,priority:number,event: Event){
     event.preventDefault();
    // console.log("test : "+JSON.stringify(detail));
     console.log("date : "+date+"title "+title+"desc "+desc+"priority : "+priority);
 //alert(date);
 
      let p=new Detail();
      
      p.date=date;
      p.description=desc;
      p.title=title;
      p.priority=priority
     //   alert(p.date);

      this.service.detail.push(p);
     //  alert("Submit clicked"+JSON.stringify(p));
 }

}
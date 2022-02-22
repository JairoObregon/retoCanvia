import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  Mylist: any = []
  constructor( private listService:ListService) { }

  ngOnInit(): void {
    this.listService.currentData$.subscribe(
      res => {
        console.log(res)
        this.Mylist = res
        
      }
    )
  }

  delete(id:any){
    console.log(this.Mylist)
    console.log(id)
    this.listService.remove(id)
  }

}

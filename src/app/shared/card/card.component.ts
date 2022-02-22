import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() personaje : any
  @Output() newItemEvent = new EventEmitter<any>();
  srcImg: any;
  disable:boolean = false
  constructor(private router: Router, private listService:ListService) { }

  ngOnInit(): void {
    this.srcImg=`${this.personaje.thumbnail.path}.${this.personaje.thumbnail.extension}`
    this.isDisabled(this.personaje.id)
  }

  add(obj:any){
    this.newItemEvent.emit(obj);
    this.disable = true
  }
  goTo(id:any){
    this.router.navigate(['detail', id])
  }

  isDisabled(id:any){
    this.listService.currentData$.subscribe(
      (resp:any) =>{
        let objIndex = resp.findIndex(((obj:any) => obj.id == id));
        if((objIndex != -1)){
          this.disable = true
        }else{
          this.disable =  false
        }
      }
    )
  }
}

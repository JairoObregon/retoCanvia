import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list = new BehaviorSubject<Array<null>>([]); 
  public currentData$ = this.list.asObservable();

  constructor() { }

  public agregar(newData: any) {
    let myList = this.list.getValue();
    if(myList)
    {
      let objIndex = myList.findIndex(((obj:any) => obj.id == newData.id));
      if(!(objIndex != -1))
      {
        myList.push(newData);
      } 
    }
    else {
      myList = [];
      myList.push(newData);
    }
    this.list.next(myList); 
  }
  public remove(id:any){
    let myList = this.list.getValue();
    let objIndex = myList.findIndex(((obj:any)=> obj.id == id));
    if(objIndex != -1)
    {
      myList.splice(objIndex,1);
    }
    this.list.next(myList); 
  }
}

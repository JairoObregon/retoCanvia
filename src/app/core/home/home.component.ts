import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any

  constructor(private apiService: ApiService,private routerDetector: Router,private rutaActiva: ActivatedRoute,private listService:ListService) { 
    this.routerDetector.events.pipe().subscribe(changes => {
      if (changes instanceof NavigationEnd) {
        this.getData()
      }
    });
  }

  ngOnInit(): void {
    this.getData()
  }

  addItem(newItem: any) {
    this.listService.agregar(newItem)
  }

  getData(){
    let data = this.rutaActiva.snapshot.params['num']
    console.log(data)
    this.apiService.get(data).subscribe(
      res =>{
        this.list = res.data.results
      }
    )
  }

  

}

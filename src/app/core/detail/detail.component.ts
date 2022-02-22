import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personaje: any;
  srcImg: any;

  constructor(private rutaActiva: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    let data = this.rutaActiva.snapshot.params['id']
    this.apiService.getXid(data).subscribe(
      res => {
        this.personaje = res.data.results[0]
        this.srcImg=`${this.personaje.thumbnail.path}.${this.personaje.thumbnail.extension}`
      }
    )

  }

}

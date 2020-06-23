import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';
import { Publications } from '../../others/interfaces'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications: Publications[]

  constructor(
    private _publish: PublicationsService
  ) {}

  ngOnInit(): void {
    this._publish.getPublish()
    .subscribe(
      resp =>{
        this.publications = resp
        console.log(resp)
      },
      err=> console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';
import { Publications, SavePublication } from '../../others/interfaces'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public publications: Publications[]
  public myPublish:SavePublication[]
  public points:number = 0
  public pointsDown:number = 0

  constructor(
    private _publish : PublicationsService,
    private _myPublish : PublicationsService,
    private _point : PublicationsService,
  ) {}

  ngOnInit(): void {

    this.myPublish = this._myPublish.getMyPublish()
    this.points = this._point.getPoints()
    this.pointsDown = this._point.getPointsDown()

    this._publish.getPublish()
    .subscribe(
      resp =>{
        this.publications = resp
        console.log(resp)
      },
      err=> console.log(err)
    )

  }

  up():void{
    this.points++
    this._point.savePoint(this.points)
  }

  down():void{
    this.pointsDown++
    this._point.savePointDown(this.pointsDown)
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publications, SavePublication} from '../others/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  public urlJson: string = 'https://jsonplaceholder.typicode.com/comments?_limit=30'
  public mydata: SavePublication[]

  constructor(
    private _http: HttpClient
  ) { }

  getPublish(){
    return this._http.get<Publications[]>(this.urlJson)
  }

  getMyPublish(){
    let myPost = JSON.parse(localStorage.getItem('publications'))
    if(myPost === null){
      return this.mydata = []
    }else{
      return this.mydata = myPost
    }
  }

  sendPublication(savePost: SavePublication){
    this.mydata.push({
      postId: savePost.postId,
      name: savePost.name,
      surname: savePost.surname,
      nick: savePost.nick,
      email: savePost.email,
      dni: savePost.dni,
      type: savePost.type,
      body: savePost.body
    })
    localStorage.setItem('publications', JSON.stringify(this.mydata))
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TypeCommentary, SavePublication } from '../../others/interfaces'
import { ValueCommentary } from '../../others/enums'

import { PublicationsService } from '../../services/publications.service'

@Component({
  selector: 'app-to-post',
  templateUrl: './to-post.component.html',
  styleUrls: ['./to-post.component.css']
})
export class ToPostComponent implements OnInit {

  public formPublication: FormGroup
  public TypeCom: TypeCommentary[]
  public myPost: SavePublication[]

  constructor(
    private _builder: FormBuilder,
    private _sendData: PublicationsService
  ) {

    this.myPost = _sendData.getMyPublish()
    console.log(_sendData.getMyPublish())
    this.dataForm()
  }

  ngOnInit(): void {
    this.TypeCom = [
      {
        value: ValueCommentary.Aficionado,
        Type: 'Aficionado'
      },
      {
        value: ValueCommentary.Estudiante,
        Type: 'Estudiante'
      },
      {
        value: ValueCommentary.Programador,
        Type: 'Programador'
      },
      {
        value: ValueCommentary.Experto,
        Type: 'Experto'
      }
    ]
  }

  dataForm(){
    this.formPublication = this._builder.group({
      name: ['', []],
      surname: ['', []],
      nick: ['', [Validators.required, Validators.maxLength(8)]],
      type: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      dni: ['', [Validators.maxLength(8), Validators.required]],
      body: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(20)]],
    })
  }

  get nameInp(){
    return this.formPublication.get('name')
  }
  get emailInp(){
    return this.formPublication.get('email')
  }
  get surnameInp(){
    return this.formPublication.get('surname')
  }
  get nickInp(){
    return this.formPublication.get('nick')
  }
  get dniInp(){
    return this.formPublication.get('dni')
  }
  get bodyInp(){
    return this.formPublication.get('body')
  }

  clear(camp:string){
    this.formPublication.get(camp).reset('')
  }

}

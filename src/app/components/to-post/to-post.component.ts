import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TypeCommentary, SavePublication } from '../../others/interfaces'
import { ValueCommentary } from '../../others/enums'

import { PublicationsService } from '../../services/publications.service'
import { Router } from '@angular/router'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-to-post',
  templateUrl: './to-post.component.html',
  styleUrls: ['./to-post.component.css']
})
export class ToPostComponent implements OnInit {

  public formPublication: FormGroup
  public TypeCom: TypeCommentary[]
  public myPost: SavePublication
  public myPublications: SavePublication[]

  constructor(
    private _builder: FormBuilder,
    private _sendData: PublicationsService,
    private _router: Router
  ){
    this.dataForm()
  }

  ngOnInit(): void {

    this.myPublications = this._sendData.getMyPublish()

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
      postId: [1],
      name: ['', []],
      surname: ['', []],
      nick: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      type: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      dni: ['', [Validators.pattern(/^[0-9]+$/) ,Validators.maxLength(8), Validators.required]],
      body: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
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

  home(){
    this._router.navigate(['/'])
  }

  savePostData(e: Event){
    e.preventDefault()
    if(this.formPublication.valid){
      this._sendData.sendPublication(this.formPublication.value)

      Swal.fire({
        title: 'OK!',
        text: 'Se ha publicado el comentario',
        icon: 'success',
        confirmButtonText: 'Inicio',
        cancelButtonColor: '#B9B673',
        cancelButtonText: 'Volver a escribir',
        showCancelButton: true
      })
      .then((res=>{
        if(res.value){
          this.home()
        }else{
          this.clear('body')
          this.clear('type')
        }
      }))

    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar todos los campos',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }

}

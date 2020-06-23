import { ValueCommentary } from './enums'

export interface Publications{
  postId: number
  id: number
  name: string
  email: string
  body: string
}
export interface TypeCommentary{
  value: ValueCommentary
  Type: string
}


export interface SavePublication{
  postId: number,
  name: string,
  surname: string,
  nick: string,
  email: string,
  dni: string,
  type: ValueCommentary,
  body: string
}

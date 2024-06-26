import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContent } from '../interfaces/IContent';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/content/'
  getContent(){
    return this.http.get<any>(`${this.apiUrl}getcontent`)
  }
  postContent(contentData:FormData){
    return this.http.post<any>(`${this.apiUrl}postcontent`,contentData)
  }
  getContentById(contentId:string){
    return this.http.get<any>(`${this.apiUrl}getcontent/${contentId}`)
  }
}

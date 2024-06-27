import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/user/'
  signUp(userData:IUser){
    return this.http.post<any>(`${this.apiUrl}signup`,userData)
  }
  login(userData:IUser){
    return this.http.post<any>(`${this.apiUrl}login`,userData)
  }
  getUser(){
    return this.http.get<any>(`${this.apiUrl}getusers`)
  }
  updateUser(userData:IUser,userId:string){
    return this.http.post<any>(`${this.apiUrl}updateuser/${userId}`,userData)
  }
  deleteUSer(userId:string){
    return this.http.delete<any>(`${this.apiUrl}deleteuser/${userId}`)
  }
  getUserbyId(userId:string){
    return this.http.get<any>(`${this.apiUrl}getuserbyid/${userId}`)
  }
  getParticularUser(){
    return this.http.get<any>(`${this.apiUrl}getparticularuser`)
  }
  getUserFilteration(paramsTerm:string){
    return this.http.get<any>(`${this.apiUrl}getusers`,{
      params:{
        paramsTerm
      }
    })
  }
}

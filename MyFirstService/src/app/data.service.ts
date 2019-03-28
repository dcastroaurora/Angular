import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { 
    console.log("trabajando")
  }

  getData(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}

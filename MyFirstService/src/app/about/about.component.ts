import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from '../models/post.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts: IPost[]
  imageUrl: String = "http://lorempixel.com/400/200"
  buttonStatus: Boolean = false
  isActive: Boolean = true
  @Input("dataPerson") datosPersona
  @Output() submit = new EventEmitter<string>()

  message: string = "Yo soy el componente hijo vv"

  constructor(private dataService: DataService) { 
    dataService.getData().subscribe(data =>{
      this.posts = data
    })
  }

  ngOnInit() {
  }

  executeEvent(){
    this.submit.emit(this.message)
  }

  save(e){
    console.log(e)
  }

}

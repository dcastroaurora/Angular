import { Component } from '@angular/core'
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = []
  persona = {
    nombre: 'Diego',
    edad: '32'
  }
  sonMessage: string

  constructor(private dataService: DataService){
    // this.dataService.getData().subscribe(data => {
    //   this.posts = data
    // })
  }

  getMessage(data: string){
    console.log(data)
    this.sonMessage = data
  }
}

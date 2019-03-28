import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'))
  }

  goPrevious(){
    let previousId = this.departmentId - 1
    this.router.navigate(['/departments', previousId])
  }

  goNext(){
    let nextId = this.departmentId + 1
    this.router.navigate(['/departments', nextId])
  }

}

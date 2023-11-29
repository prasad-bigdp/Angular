import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userId: number=0;
  constructor(private r: ActivatedRoute) {
    this.r.params.subscribe((para) => {
      this.userId = +para[ 'id' ];
    })

  }

}

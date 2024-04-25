import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{

  public id:number=0;
  public authorid:number=0;
  constructor(private route: ActivatedRoute)
  {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.authorid = param['authorId']
    });
  }
}

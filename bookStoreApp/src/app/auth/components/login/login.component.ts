import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name: string = '';
  public email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.name = params['name'];
      this.email = params['email'];
    });
  }

    gotoSignUp() : void{
      this.router.navigate(['/auth/signup']);
    }

    goToBookDetails() : void{
      this.router.navigate(['/public/book-details',100,'author',400]);
    }
}

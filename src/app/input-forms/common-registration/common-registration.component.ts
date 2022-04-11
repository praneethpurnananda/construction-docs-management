import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-registration',
  templateUrl: './common-registration.component.html',
  styleUrls: ['./common-registration.component.css', '../common-styles.css']
})
export class CommonRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}

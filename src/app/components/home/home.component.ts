import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'SICODI';

  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (!this.auth.loggedIn) {
      this.auth.login();
    }
  }
}

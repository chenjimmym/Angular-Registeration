import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  message = '';
  onSubmit(){
    this.users.push(this.user);
    this.message = `Thank you for registering with us ${this.user.first_name}. We just sent you a confirmation email at ${this.user.email}, and we will send all mail to ${this.user.address}, ${this.user.city}, ${this.user.state}. Have a wonderful day!`;
    console.log(this.user);
    this.user = new User();
  }
}

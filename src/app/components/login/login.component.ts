import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(public authService: AuthService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log("loginUser");
    // localStorage.setItem('token', "data.auth_token");
    // this.authService.isLoggedIn.next(true);
    console.log("email", this.email, this.password)
    this.authService.loginUser(this.email, this.password).subscribe(
      data => {
        console.log("data", data);
        if (data?.error) {
          this.message = data.error;
        } else {
          this.message = "Congratulations! You have successfully logged into Pansion Selce!";
          localStorage.setItem('token', data.token);
          this.authService.isLoggedIn.next(true);
          setTimeout(() => {
            this.message = "";
            this.modalService.close();
          }, 3000)
        }
      },
      error => {
        this.message = error.error;
      }
    );
  }

  public triggerProfileDialog(): void {
    // this.dialog.open(ProfileComponent, {
    //   width: '600px',
    // });
  }
}

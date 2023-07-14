import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document, 
    protected modalService: ModalService,
    public authService: AuthService
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      document.getElementById('header')?.classList.add('scrolled');
    } else {
      document.getElementById('header')?.classList.remove('scrolled');
    }
  }
  name = 'Angular';
  menuOpen: boolean = false;

  public showLoginDialog(): void {
    console.log("CLICKed")
  }
  onLogout(): void {
    this.authService.logoutUser();
  }

  toggleMenu(): void {
      console.log("om", this.menuOpen);
      this.menuOpen = !this.menuOpen;
  }
}

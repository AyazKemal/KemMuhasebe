import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BusyService } from '../../core/services/busy.service';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterLinkActive,
    MatProgressBar,
    // MatMenuTrigger,
    // MatMenu,
    // MatDivider,
    // MatMenuItem
    //IsAdminDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
 busyService = inject(BusyService);
  // cartService = inject(CartService);
  // accountService = inject(AccountService);
  private router = inject(Router);

  logout() {
    // this.accountService.logout().subscribe({
    //   next: () => {
    //     this.accountService.currentUser.set(null);
    //     this.router.navigateByUrl('/');
    //   }
    // })
  }
}

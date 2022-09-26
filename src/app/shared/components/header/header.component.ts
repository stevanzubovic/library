import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/http/navigation/navigation.service';
import { Subscription } from 'rxjs';
import { INavItem } from '../../interfaces/i-nav-item';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems: INavItem[] = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.getNavItems();
  }

  getNavItems() {
    this.navigationService.getNavigationItems()
      .subscribe({
        next: navItems => {
          this.navItems = navItems; 
        }, 
        error: err => {
          console.log(err)
        } 
      })
  }

}

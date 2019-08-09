import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/service/data-storage.service';
import { Component } from '@angular/core';
import { Navigate } from '../shared/model/navigate.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router) { }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  toRecipes() {
    this.router.navigate([Navigate.RECIPE.RECIPES]);
  }

  toShoppingList() {
    this.router.navigate([Navigate.SHOPPING_LIST.SHOPPING_LIST]);
  }

  toRegister() {
    this.router.navigate([Navigate.AUTH.SIGNUP]);
  }

  toLogin() {
    this.router.navigate([Navigate.AUTH.SIGNIN]);
  }

  toRootPage() {
    this.router.navigate([Navigate.ROOT]);
  }
}


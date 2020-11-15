import { NavLink } from 'src/app/interfaces/interfaces';
import { Injectable } from '@angular/core';
import data from 'src/app/config/nav/nav.json';
@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor() {}

  getNavLinks(): NavLink[] {
    let navLinks: NavLink[];
    navLinks = data.NavLinks;
    return navLinks;
  }
}

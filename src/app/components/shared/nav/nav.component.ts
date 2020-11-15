import { NavService } from './../../../services/nav.service';
import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public navLinks: NavLink[];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navLinks = this.navService.getNavLinks();
  }
}

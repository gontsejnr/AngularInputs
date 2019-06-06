import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 pageMenu = [{name:"login",path:"login"},{name:"contact",path:"contact"},{name:"about",path:"about"},{name:"form",path:"form"}]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onNav(item){
    this.router.navigateByUrl(item.path)
  }

}

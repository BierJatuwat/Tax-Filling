import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-frontend',
  templateUrl: './header-frontend.component.html',
  styleUrls: ['./header-frontend.component.scss']
})
export class HeaderFrontendComponent implements OnInit {
  date:Date=new Date;
  constructor() { }

  ngOnInit(): void {
  }

}

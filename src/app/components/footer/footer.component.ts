import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  hasRoute(route: string) {
    return this.route.url === route;
  }
}
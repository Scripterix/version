import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() {
    console.log('Hello Produkty...');
  }

  ngOnInit(): void {
    console.log(`Hello World`);
  }
}

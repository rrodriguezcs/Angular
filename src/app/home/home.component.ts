import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-success  is-halfheight">
  <div class="hero-body">
    <div class="">
     
    <p class="title">
        A webpage for all things Angular
      </p>
      <p class="subtitle">
        CSE 3650
      </p>

    </div>
  </div>
</section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/coding.jpg') !important;
    background-size: cover;
    background-position: center center;
  }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

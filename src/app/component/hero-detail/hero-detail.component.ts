import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('--------------------')
      console.log(params);
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}

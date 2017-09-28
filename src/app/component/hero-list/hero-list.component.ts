import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  heroesPromise: Promise<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.title = route.snapshot.data[0]['title'];
  }

  ngOnInit() {
    this.heroesPromise = new Promise((resolve, reject)=>{
      var heroes = [
        {id:"1", name:"Tom"},
        {id:"2", name:"Aaron"},
        {id:"3", name:"Chris"},
      ];
      resolve(heroes);
    });
  }

  onSelect(hero) {
    this.router.navigate(['/hero', hero.id]);
  }
}

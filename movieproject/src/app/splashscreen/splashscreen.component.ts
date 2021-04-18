import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    { path: '/assets/thebreakfastclub.jpg' },
    { path: '/assets/hackers.jpg' },
    { path: '/assets/themonkeyking.jpg' },
    { path: '/assets/sinister.jpg' },
    { path: '/assets/radioactive.jpg' },
    { path: '/assets/matrixcat.jpg' },
    { path: '/assets/theshining.jpg' },
    { path: '/assets/AvatarExample.jpg' }

  ]
  arrowsOutside = true
}



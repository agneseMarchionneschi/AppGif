import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() favoriteList: any

  constructor() { }

  ngOnInit(): void {

  this.favoriteList = JSON.parse(localStorage.getItem('favoriteList')!)

  }

}

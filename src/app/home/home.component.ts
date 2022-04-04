import { HostListener, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Component, Inject, OnInit } from '@angular/core'

import { Observable } from 'rxjs/internal/Observable';


import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from '../services/giphy.service';
import { DetailComponent } from '../detail/detail/detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion)

  accordion!: MatAccordion;
  title = 'app';
  public size: any
  public keyword: any
  public selected = 'none';

  public lang = 'en'
  public rating = 'r'
  public sorted:boolean = false
  public page = {
    offset: 0,
    pageSize: 25,

  }

  public pageSize = 25
  public offset= 0
public limitSize = 10
public event: any
  public currentOffset:any
  public element:any

  public favoriteList:any[] = []
  public images:any[] = []
  loading: boolean = true
public trend : boolean = false
  constructor(
  public giphyService: GiphyService,
  public dialog: MatDialog,
  private route: ActivatedRoute,
  private router: Router,
  ) {}
  ngOnInit(): void {

    this.trend = true
    this.loading = true
    this.giphyService.trending(this.limitSize,this.rating).subscribe({
      next: (response) => {

        this.trend = true
      this.images = response.data


      },
      error: (err) => {

        alert('Si è verificato un errore inaspettato')

      },
    })
  }


  searchTerm!: string;

  @HostListener('window:scroll')
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      const page = {

        pageSize: this.page.pageSize,
        offset:   this.offset += this.pageSize,
      }
      const sorted=this.sorted
      this.getGif(this.selected,page)

    }
  }




  search() {
    this.trend = false
    this.images = new Array();
    this.getGif(this.selected,this.page);
  }




  getGif(selected:string,page: { pageSize: number; offset: number; }){

    this.giphyService.searching(this.searchTerm, page.pageSize, page.offset,this.rating,this.lang).subscribe({
      next: (response) => {
        if (selected == 'none') {
        this.images = this.images.concat(response.data)
        console.log(selected)
      }
        else if (selected == 'asc')
        {
          this.images = this.images.concat(response.data).sort((a, b) => new Date(b.import_datetime).getTime() - new Date(a.import_datetime).getTime())
          console.log(selected)

        }

        else if (selected == 'desc')

        {
        this.images = this.images.concat(response.data).sort((a, b) => new Date(a.import_datetime).getTime() - new Date(b.import_datetime).getTime());
        console.log(selected)
        }

      },
      error: (err) => {

        alert('Si è verificato un errore inaspettato')

      },
    })
  }
  onLoad() {
    this.loading = false;
}

goToFav(){
  this.router.navigateByUrl('favorites')
}

  openDetail(element: any) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '700px',
      height: '750px',
      data: element,
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {

        //this.getallFrequencies()
      }
    })
  }
  addFav(element: any){


  this.favoriteList.push(element)

  localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
  console.log(this.favoriteList)

  }
}

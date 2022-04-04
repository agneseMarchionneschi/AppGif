import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DetailComponent } from './detail/detail/detail.component';
import { FavoriteComponent } from './favorites/favorite/favorite.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FavoriteComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    MatRadioModule,
    MatTooltipModule,
    MatSelectModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

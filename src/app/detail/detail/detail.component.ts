import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  loading: boolean = true
  constructor(private dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public giph: any) {

  }

  ngOnInit(): void {

  }
  onLoad() {
    this.loading = false;
}
}

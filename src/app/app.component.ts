import { Component, OnInit } from '@angular/core';
import { SharepointService } from './sharepoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private sharepoint: SharepointService) { }

  ngOnInit(): void {
    this.sharepoint.getAbsenseList()
      .subscribe(res => {
      console.log(res);
    });
  }
}

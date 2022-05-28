import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle("about");
  }

  ngOnInit(): void {
  }


  public childEvent(x:any) {
    console.dir(x);
    alert(x.desc+" "+x.imgSrc);
    
  }

}

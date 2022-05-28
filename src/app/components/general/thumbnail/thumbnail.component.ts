import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input()
  public imgSource : string="";
  @Input()
  public description :string="";
  @Output("imgClicked")
  public clickEventEmitter:EventEmitter<{imgSrc:string,desc:string}>=new EventEmitter<{imgSrc:string,desc:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  public imgClicked(){
    this.clickEventEmitter.emit({imgSrc:this.imgSource,desc:this.description});
  }

}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  public rating = 0;
  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter();
  public stars: boolean[];
  @Input()
  public readonly = true;
  // max = 5;
  // min = 2;
  // isReadonly = true;
  constructor() { }

  ngOnInit() {
    // this.stars = [false, false, true, true, true];
  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() executeQuery: Function;
  constructor() { }

  ngOnInit() {
    
  }

}

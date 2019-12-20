import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../father/component.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(public componentService: ComponentService) { }
  addAndShow() {
    this.componentService.add();
  }
  ngOnInit() {
  }
}

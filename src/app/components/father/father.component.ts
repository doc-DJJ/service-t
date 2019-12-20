import { Component, OnInit } from '@angular/core';
import { ComponentService } from './component.service';
@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  constructor(
    private componentService: ComponentService,

  ) { }
  addAndShowComponent() {
    this.componentService.add();
  }
  ngOnInit() {
  }
}

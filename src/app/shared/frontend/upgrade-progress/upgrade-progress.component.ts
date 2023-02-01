import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upgrade-progress',
  templateUrl: './upgrade-progress.component.html',
  styleUrls: ['./upgrade-progress.component.scss']
})
export class UpgradeProgressComponent implements OnInit {
  @Input() stage: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

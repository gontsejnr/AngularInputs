import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;
  @Input() age;
  @Input() race: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 
name = 'John';
surname = 'Doe'
age = 15;
race = 'black';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigateByUrl("contact")
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public name: string = '';
  addName(value: string) {
    console.log("heloo its working");
    this.name = value;
  };

}

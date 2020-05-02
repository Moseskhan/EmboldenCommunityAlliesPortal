import { Component, OnInit } from '@angular/core';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.scss']
})
export class ViewDocumentsComponent implements OnInit {
  application=JSON.parse(localStorage.getItem("application"));
  constructor() { }

  ngOnInit() {
    console
  }

}

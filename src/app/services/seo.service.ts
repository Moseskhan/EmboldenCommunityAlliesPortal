import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta,private title: Title) { 
    
  }

  AddTitleAndMeta(title,meta){
   this.meta.addTags(meta);
   this.title.setTitle(title);
  }

}

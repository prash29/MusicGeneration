import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  currentInput = ""
  isPresent = false;
  filename = "No File Selected"
  audioFile :SafeUrl

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
       var audio = document.getElementById("audio");
       this.filename = event.target.files[0].name;
       console.log(this.filename);
       console.log(event.target.value)
       this.audioFile = this.sanitizer.bypassSecurityTrustUrl(event.target.value);
       this.isPresent = true
            
      console.log(this.audioFile)

     }
   }

  constructor(private sanitizer:DomSanitizer) { 

  }

  ngOnInit() {
  }

}

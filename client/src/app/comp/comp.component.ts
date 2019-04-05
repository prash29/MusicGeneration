import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  headers = new HttpHeaders();
  baseURL = 'http://localhost:3000';
  frontendURl = 'http://localhost:4200';
  private JSObject: Object = Object;


  currentInput = ""
  isPresent = false;

  localUrl: any;

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      this.localUrl = event.target.files[0];

    }
  }


  //use this format for http get function

  testfunction() {
    let options = { headers: this.headers, withCredentials: true };
    this.http.get(this.baseURL + "/test", options).subscribe(res => {

      console.log("response:" + JSON.stringify(res));

    }, error => {
      console.log(JSON.stringify(error));
    })
  }


  //use this format for http POST 

  testhttpPost() {
    let req = {}  //used for sending data to server
    req['name'] = "Name"
    req['data'] = 10

    let options = { headers: this.headers, withCredentials: true };

    this.http.post(this.baseURL + "/testPost", req, options).subscribe(res => {

      console.log(JSON.stringify(res));  //server response

    }, error => {
      console.log(JSON.stringify(error))
    })
  }

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {

    this.headers.append('Access-Control-Allow-Headers', 'Content-Type,Origin');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    this.headers.append('Access-Control-Allow-Origin', '*');

    this.testfunction()
    this.testhttpPost()
  }

  ngOnInit() {
  }

}

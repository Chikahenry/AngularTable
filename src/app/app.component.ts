import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'angulartest';
  apiUrl: string; 

  constructor( 
    private httpClient: HttpClient, 
  ) {}

  ngOnInit(){
    this.getData()
  }

  getData() {
    this.apiUrl = environment.AUTHAPIURL + "users";

    const reqHeader = new HttpHeaders({
      "Content-Type": "application/json", 
    });
 

    this.httpClient
      .get<any>(this.apiUrl, { headers: reqHeader })
      .subscribe((data) => {
        console.log(data); 
        if (data.status === true) { 
            alert("Data fetched successfully")
        } else {
          
          alert("Something went wrong, Please try again")
        }
      });
  }
}

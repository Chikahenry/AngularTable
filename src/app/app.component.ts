import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Angulartest';
  apiUrl: string; 
  showListOfUsers: boolean;
  usersData: any;
  dtOptions:  DataTables.Settings = {};

  constructor( 
    private httpClient: HttpClient, 
  ) {}

  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
    this.getData()
  }

  getData() {
    this.apiUrl = environment.AUTHAPIURL + "users?page=2";

    const reqHeader = new HttpHeaders({
      "Content-Type": "application/json", 
    });
 

    this.httpClient
      .get<any>(this.apiUrl, { headers: reqHeader })
      .subscribe((res) => {
        console.log(res); 
        if (res.data.length > 0) { 
          this.showListOfUsers = true
          this.usersData = res.data
            alert("Data fetched successfully")
        } else {
          
          alert("Something went wrong, Please try again")
        }
      });
  }
}

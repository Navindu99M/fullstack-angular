import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  name: string ="";
  email:string ="";
  address: string ="";
  phone: string ="";
  Appoiment: string="";
  feedback:string="";

  constructor(private http: HttpClient )
  {

 
  }
  getdata()
  {


    let bodyData = {
      "name" : this.name,
      "email":this.email,
      "address" : this.address,
      "phone" : this.phone, 
      "Appoiment":this.Appoiment,
      "feedback":this.feedback
  };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Successfully")
        this.name = '';
        this.email='';
        this.address = '';
        this.phone  = '';
        this.Appoiment = '';
        this.feedback = '';

    });
  }

  ngOnInit(): void {
  }

}

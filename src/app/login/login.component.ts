import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
	uuser:any =[];
  mydte:any =[];

  ngOnInit(): void {
    console.log('enter oninit')
    this.uuser = new FormGroup({

      'uemail':new FormControl(''),
      'upwd1':new FormControl('')

    })
  }
  loginfn(){
	  let data = JSON.parse(localStorage.data);
	  for(let i=0; data.length > i; i++){
		  
		  if( data[i].email ){
			  if((this.uuser.uemail == data[i].email) && (this.uuser.upwd1 == data[i].pwd1)){
				  
			  }else{
				  console.log("please enter valid user name password");
				  return false;
			  }
		  }
	  }
  }

}

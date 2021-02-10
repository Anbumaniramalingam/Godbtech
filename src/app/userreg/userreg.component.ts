import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

   constructor(){}
  user:	FormGroup;
  mydte:any =[];
  persionlist:any=[];

  ngOnInit(): void {
    console.log('enter oninit')
    this.user = new FormGroup({

      'fname':new FormControl(''),
      'lname':new FormControl(''),
      'email':new FormControl(''),
      'phone':new FormControl(''),
      'add':new FormControl(''),
      'gender':new FormControl(''),
      'pwd1':new FormControl(''),
      'pwd2':new FormControl('')

    })
  }
  
  pushdata(){
  const emil=this.user.get('emil').value;
  const pwd=this.user.get('pwd').value;
  const ste=this.user.get('ste').value;
  const dis=this.user.get('dis').value;
  const po=this.user.get('po').value;

  this.mydte.push({

    emil:emil,
    pwd:pwd,
    ste:ste,
    dis:dis,
    po:po

    
  })

  }

  onSave(){console.log(this.user);debugger;
		if(this.user.value.fname != ""){
			if(this.user.value.fname.length > 5){
				
			}
			else{
				console.log("error f-name");
				return false;
			}
		}else{
				console.log("error f-name");
			return false;
		}
		
		if(this.user.value.lname != ""){
			if(this.user.value.lname.length > 5){
				
			}
			else{
				console.log("error l-name");
				return false;
			}
		}else{
				console.log("error l-name");
			return false;
		}
		
		if(this.user.value.email != ""){
			if(this.user.value.email.length > 5){
				
			}
			else{
				console.log("error e-mail");
				return false;
			}
		}else{
				console.log("error e-mail");
			return false;
		}
		
		if(this.user.value.phone != ""){
			if(this.user.value.phone.length > 5){
				
			}
			else{
				console.log("error phone");
				return false;
			}
		}else{
				console.log("error phone");
			return false;
		}
		
		
		
		if(this.user.value.pwd1 != ""){
			if(this.user.value.pwd1.length > 5){
				
			}
			else{
				console.log("error pwd1");
				return false;
			}
		}else{
				console.log("error pwd1");
			return false;
		}
		if(this.user.value.pwd2 != ""){
			if(this.user.value.pwd2.length > 5){
				
			}
			else{
				console.log("error pwd2");
				return false;
			}
		}else{
				console.log("error pwd2");
			return false;
		}
		
		
		if(this.user.value.pwd1 != this.user.value.pwd2){
			alert('plese enter same password');
			return false;
		}
        localStorage.data = [localStorage.data, JSON.stringify(this.user.value)];
		alert("your data uploaded!...");
		this.user = new FormGroup({

      'fname':new FormControl(''),
      'lname':new FormControl(''),
      'email':new FormControl(''),
      'phone':new FormControl(''),
      'add':new FormControl(''),
      'gender':new FormControl(''),
      'pwd1':new FormControl(''),
      'pwd2':new FormControl('')

    });
		

  }

  onGet(){
    
    }

  

}

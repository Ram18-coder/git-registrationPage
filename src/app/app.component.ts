import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'registrationpage';
  register:any;
  allUser:any=[]
  constructor(private formBuilder:FormBuilder,
              private registerService:RegisterService){}

  ngOnInit(): void {


    this.register = new FormGroup({
      fname: new FormControl("",[Validators.required]),
      lname:new FormControl("",[Validators.required]),
      pswd:new FormControl("",[Validators.required]),
      pswd1:new FormControl("",[Validators.required]),
      gmail:new FormControl("",[Validators.required])
    })





  }

  user()
  {
    this.registerService.create(this.register.value);
  }

}

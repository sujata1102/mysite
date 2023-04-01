
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder,FormArray} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenName } from '../forbidden-name';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  // name = new FormControl(); 

  /*profile = new FormGroup({
    name : new FormControl('sujata',{
      validators:[Validators.required,Validators.minLength(3)],
      nonNullable:true}),
    email : new FormControl(null,{
      validators:[Validators.required,Validators.email],
      nonNullable:true}),
    mobile : new FormControl(null,{nonNullable:true}),
    address : new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    })
  })*/

  //using formbuilder to reduce code
  profile = this.fb.group({
    name : ['sujata',{
      validators:[Validators.required,
        Validators.minLength(3),
        forbiddenName(new RegExp(/abc/))],
      nonNullable:true}],
    email : [null,{
      validators:[Validators.required,Validators.email],
      nonNullable:true}],
    mobiles : this.fb.array([
      this.fb.control('')
    ]),
    address : this.fb.group({
      street: [],
      city: [],
      state: [],
      zip: []
    })
  })
  submitForm():void{
    console.log(this.profile.value);
  }
  /*updateForm():void{
    this.profile.setValue({
      name:'sujata',
      email:null,
      mobile:null
    })
  }*/

  /*updateForm():void{
    this.profile.patchValue({
      name:'sujata'
    })
  }*/

  updateForm():void{
    this.profile.reset();
  }
  constructor(private route : ActivatedRoute,
  private fb:FormBuilder){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>
      console.log(params));
  }
  // updateName():void{
  //   this.name.setValue('sujata');
  // }

  get namectr():FormControl{
    return this.profile.get('name') as FormControl;
  }
  get emailctr():FormControl{
    return this.profile.get('email') as FormControl;
  }
  get mobiles():FormArray{
    return this.profile.get('mobiles') as FormArray;
  }
  addMobile():void{
    this.mobiles.push(this.fb.control(''))
  }
}

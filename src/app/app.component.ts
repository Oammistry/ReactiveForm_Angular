import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'select';
  SignupForm:FormGroup;
  firstname:string='';
  lastname:string='';
  select:string='';
  radio:string='';
  list : any[]=[];
  job :any;

  submitted = false;

  constructor(private frmbuilder:FormBuilder){
    this.SignupForm=frmbuilder.group({
      fname: new FormControl("",[Validators.required]),
      lname: new FormControl("",[Validators.required]),
      soption: new FormControl("",[Validators.required]),
      radiobtn: new FormControl("",[Validators.required]),
    });
  }
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  userdata : any[]=[];
  dataSource = new MatTableDataSource<any>(this.userdata);

public additem():void{
  this.userdata.push(this.SignupForm.value);
  this.dataSource.data = this.userdata;
  this.SignupForm.reset();
}

get error(){
 return this.SignupForm.get('fname')
}
get error2(){
  return this.SignupForm.get('lname')
 }


  // postData(SignupForm:any){
  //   this.submitted = true;
  //   this.firstname=SignupForm.controls.fname.value;
  //   this.lastname=SignupForm.controls.lname.value;
  //   this.select=SignupForm.controls.soption.value;
  //   this.radio=SignupForm.controls.radiobtn.value;
  //   console.log(SignupForm.controls);
  //   console.log(this.firstname);
  //   this.SignupForm.reset();
  // }

//   adddata(fname:any,lname:any,opt:any, rad:any){
    
//       this.job.push({
//         firstname :fname,
//         lastname : lname,
//         soption : opt,
//         radio : rad
//       }); 

}


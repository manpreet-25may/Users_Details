import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule,Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  providers: [ UserdataService],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  data:any;
  // editUserData!: any;
  // editUser: FormGroup | undefined;
  
  message:undefined | string;
  editUser = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
  })
  
  constructor(private route: ActivatedRoute,
    private editUserService: UserdataService,
  private udata:Router) {    
  }
  user:any;
  ngOnInit(): void {
   let x= this.route.snapshot.paramMap.get('id');
    this.editUserService.editById(x).subscribe((resp) => {
        this.user= resp;
      console.log(this.user);
    })
  }
  UpdateData(){ 
    console.log(this.editUser.value);  
    // this.editUserService.getUsers().subscribe((resp) => {
    //   this.user.editUser = resp;
    //  console.log(this.data);
  // })
    this.udata.navigate(["/Home"])
    
     
      
    }
   
    
    
    
    }
    
  
  










// console.log(index)
      // this.data.data.splice(index, 1)
      // alert("updated");
    //  console.log(this.data);
    // this.editUser=this.data;

  // this.editUserService.update(this.user).subscribe({
    //   next:(resp)=>{
    //     this.udata.navigate(["/Home"]);      }
    // })






  
  // UpdateData(id:any,index:any) {
   
  //     // console.log(x.id,index)
  //     this.data.data.slice(index+1)
  //   console.log(this.data);}
    // this.editUserService.update(data).subscribe((resp)=>{
    //   if(resp){
    //     this.message="User is updated";
    //   }
    // })
  //   let x= this.route.snapshot.paramMap.get('id');
  //   this.editUserService.update(x,this.data).subscribe((resp) => {
  //     this.user= resp;
  //     this.editUser = new FormGroup({
  //       first_name: new FormControl(resp['first_name']),
  //       last_name: new FormControl(resp['last_name']),
  //       email: new FormControl(''),
  //     })
      
  //   console.log(this.user);
  // })
    
    
    
    
    
  

  // this.editUserService.update(this.route.snapshot.paramMap.get('id'),this.editUser.value).subscribe((resp)=>{
  //   console.log(resp,"data updated successfully");




import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink,RouterModule } from '@angular/router';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterLink,RouterModule],
  providers: [UserdataService],
  templateUrl:'./user-list.component.html',
  styleUrl:'./user-list.component.css'
})
export class UserListComponent {
  data: any;
  userData: any;

  constructor(public user: UserdataService,private udata:Router) { }
  ngOnInit(): void {
    console.log('user list init')
    this.user.getUsers().subscribe((resp) => {
        this.data = resp;
       console.log(this.data);
    })
  }
  deleteUser(x: any, index: any) {
    // console.log(x.id,index)
    this.data.data.splice(index, 1)
    alert("Are you sure you want to delete?");
  }
  edit(x:any) {
      this.udata.navigate(["/Edit",x.id]);
      
  }











  

  // onEditUser(id:any,index:number){

  // console.log(this.data.data[index]);
  // console.log("username:",this.data.data[index].first_name)
  // this.ngOnEdit(index)

  //     let userI= this.route.snapshot.paramMap.get('id')
  //     console.log(userI);
  //    userI && this.userId.edit(userI).subscribe((response)=>{
  // console.log(response)
  // this.data=response;
  //     })
  // }

  // ngOnEdit(id:number): void {
  //   console.log("get data for id:", id)
  //   this.editUserService.edit(id).subscribe((resp) => {
  //     if (resp) {
  //       this.userData = resp;
  //     }
  //     console.log(this.userData);
  //   })

  // }








  // deleteUser(id: number) {
  //   console.log("Id is ", id);
  //   this.user.deleteRecord(id).subscribe(resp => {
  //     alert("User Deleted");
  //     this.user.getUsers().subscribe((resp) => {
  //       if (resp) {
  //         this.data = resp;
  //       }
  //       console.log(this.data);
  //     })
  //   })
  // }
}
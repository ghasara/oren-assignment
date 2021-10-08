import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails :any

  constructor(private userdetails: UserDetailsService) { }

  ngOnInit(): void {
    this.userdetails.signup().subscribe((data: any)=> {
      this.userDetails = data
      console.log(this.userDetails)
    })
  }

}

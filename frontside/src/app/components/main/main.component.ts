import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../../models/users.model'
import { Store } from '@ngxs/store';
import { AddUser } from './main.actions';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private userService: UsersService,
              private store: Store) { }

  list;
  rowSelected;

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(data => {
      this.list = data;
    });
  }

  rowClicked(event) {
    this.rowSelected = event;
    
  }

  filterPressed(e){
    this.userService.getUserByTerm(e.target.value).subscribe(result => {
      this.list = result;
    })
  }

  add(){
    let user: User = {
      Address: 'sdf', 
      name: 'sdffsdff', 
      id: 10
    }
    
    
    this.store.dispatch(new AddUser(user));
  }
}


import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../allservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private myService:ServiceService,
    private router:Router
  ) { }

  ngOnInit() {
  }

}

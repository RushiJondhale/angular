import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nabar',
  templateUrl: './nabar.component.html',
  styleUrls: ['./nabar.component.css']
})
export class NabarComponent {
constructor (private router: Router){

}
  homeBtn(){
    this.router.navigate([''])
}
}

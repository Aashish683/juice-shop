import { AdministrationService } from './../Services/administration.service';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../Services/configuration.service';
import { UserService } from '../Services/user.service';
import { ChallengeService } from '../Services/challenge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  langs:string[];
  version:string;
  version$;
  constructor(private adminServe:AdministrationService,private configServe:ConfigurationService,
        private userServe:UserService,private challengeServe:ChallengeService,
        private router:Router) {
       }

  ngOnInit() {
       this.version$=this.adminServe.getApplicationVersion();
       this.adminServe.getApplicationVersion().subscribe((versionData:any)=>{
          console.log(versionData);
          this.version='v' + versionData.version;
       })
  }

  onSearch(value:string){
         this.router.navigate(['/search'],{
           queryParams:{
             q:value
           }
         });
  }

}

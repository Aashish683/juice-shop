import { AdministrationService } from './../Services/administration.service';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../Services/configuration.service';
import { UserService } from '../Services/user.service';
import { ChallengeService } from '../Services/challenge.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  langs:string[];
  version:string;
  version$;
    constructor(public adminServe:AdministrationService,public configServe:ConfigurationService,
       public userServe:UserService,public challengeServe:ChallengeService,
       public translateServe:TranslateService) {
         translateServe.setDefaultLang('en');
       }

  ngOnInit() {
       this.version$=this.adminServe.getApplicationVersion();
       this.adminServe.getApplicationVersion().subscribe((versionData:any)=>{
          console.log(versionData);
          this.version='v' + versionData.version;
       })
  }


  switchLang(lang){
    this.translateServe.use(lang);
  }

}
//Add

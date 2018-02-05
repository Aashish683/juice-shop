import { AdministrationService } from './../Services/administration.service';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../Services/configuration.service';
import { UserService } from '../Services/user.service';
import { ChallengeService } from '../Services/challenge.service';
import { TranslateService } from '@ngx-translate/core';
import languages from '../../assets/translations/languages';
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
        private translateServe:TranslateService,private router:Router) {
        translateServe.setDefaultLang('en');
        this.langs=languages;

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

  onSearch(value:string){
         let queryParams;
         queryParams={queryParams:{q:value}}
         if(value)
         this.router.navigate(['/search'],queryParams);
         else
         this.router.navigate(['/search']);
  }

}

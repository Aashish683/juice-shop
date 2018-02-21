import { WindowRefService } from './../Services/window-ref.service';
import { TestService } from './../Services/test.service';
import { AdministrationService } from './../Services/administration.service';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../Services/configuration.service';
import { UserService } from '../Services/user.service';
import { ChallengeService } from '../Services/challenge.service';
import { TranslateService } from '@ngx-translate/core';
import {languages} from '../../assets/i18n/langs';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  languages:any[];
  version:string;
  version$;
  logoSrc:string;
  constructor(private adminServe:AdministrationService,private configServe:ConfigurationService,
        private userServe:UserService,private challengeServe:ChallengeService,
        private translate:TranslateService,private router:Router,
        iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
        private testServe:TestService,private windowRef:WindowRefService) {
          this.languages=languages;
          this.configServe.getApplicationConfiguration().subscribe(confData=>{
            let str=confData.application.logo;
            if(!checkLogoName(str))
            str='assets/images/public/images/JuiceShop_Logo.svg';
            console.log(str);
            this.logoSrc=str;
            iconRegistry.addSvgIcon(
              'juice-shop-logo',
              sanitizer.bypassSecurityTrustResourceUrl(`${str}`));
          });
       }

  ngOnInit() {
         this.version$=this.adminServe.getApplicationVersion();
         this.adminServe.getApplicationVersion().subscribe((versionData:any)=>{
          console.log(versionData);
          this.version='v' + versionData.version;
       })
  }


  switchLang(lang){
        this.translate.use(lang);
  }

  onSearch(value:string){
         let queryParams;
         queryParams={queryParams:{q:value}}
         if(value)
         this.router.navigate(['/search'],queryParams);
         else
         this.router.navigate(['/search']);
  }

  test(){
    this.testServe.changEnvt().subscribe((resp)=>{
      this.windowRef.nativeWIndow.location.reload();
    },(err)=>console.log(err));
  }

}

function checkLogoName(str:string){
  if(str.substring(0,4)=='http')
    return true;
  return false;
}

import { WindowRefService } from './../Services/window-ref.service';
import { AdministrationService } from './../Services/administration.service';
import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../Services/configuration.service';
import { UserService } from '../Services/user.service';
import { ChallengeService } from '../Services/challenge.service';
import { TranslateService } from '@ngx-translate/core';
import {languages} from '../../assets/i18n/langs';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {
  public languages: any[];
  public version: string;
  public version$;
  public logoSrc: string;
  @Input() public scoreBoardVisible = false;

  constructor(private adminServe:AdministrationService,private configServe:ConfigurationService,
        private userServe:UserService,public challengeServe:ChallengeService,
        private translate:TranslateService,private router:Router,
        iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
    this.version$ = this.adminServe.getApplicationVersion();
    this.adminServe.getApplicationVersion().subscribe((versionData: any) => {
    console.log(versionData);
    this.version = 'v' + versionData.version;
    })

    this.challengeServe.find({ name: 'Score Board' }).subscribe((challenges: any) => {
        console.log(challenges)
        challenges = challenges.data
        this.scoreBoardVisible = challenges[0].solved
    }, (err) => {
      console.log(err)
    })
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  switchLang(lang) {
        this.translate.use(lang);
  }

  isLoggedIn() {
    return localStorage.getItem('token')
  }

  logOut() {
    localStorage.removeItem('token')
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

function checkLogoName(str:string){
  if(str.substring(0,4)=='http')
    return true;
  return false;
}

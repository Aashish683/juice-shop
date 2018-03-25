import { WindowRefService } from './../Services/window-ref.service';
import { AdministrationService } from './../Services/administration.service';
import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../Services/configuration.service';
import { UserService } from '../Services/user.service';
import { ChallengeService } from '../Services/challenge.service';
//import {languages} from '../../assets/i18n/langs';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { TranslateService } from '@ngx-translate/core';

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

const languages=[
  {key:'en',lang:'English'},
  {key:'ar_SA',lang:'عربى'},
  {key:'cs_CZ',lang:'Česky'},
  {key:'da_DK',lang:'Dansk'},
  {key:'de_DE',lang:'Deutsch'},
  {key:'el_GR',lang:'Ελληνικά'},
  {key:'es_ES',lang:'Español'},
  {key:'et_EE',lang:'Eesti'},
  {key:'fi_FI',lang:'Suomalainen'},
  {key:'fr_FR',lang:'Français'},
  {key:'he_IL',lang:'עברי'},
  {key:'hu_HU',lang:'Magyar'},
  {key:'id_ID',lang:'Bahasa Indonesia'},
  {key:'it_IT',lang:'Italiano'},
  {key:'ja_JP',lang:'日本の'},
  {key:'lt_LT',lang:'English'},
  {key:'lv_LV',lang:'Latvijas'},
  {key:'my_MM',lang:'မန္မာ'}, //<----Not able to copy for some reason
  {key:'nl_NL',lang:'Nederlands'},
  {key:'no_NO',lang:'Norsk'},
  {key:'pl_PL',lang:'Język Polski'},
  {key:'pt_PT',lang:'Português'},
  {key:'ro_RO',lang:'Românesc'},
  {key:'ru_RU',lang:'Pусский'},
  {key:'sv_SE',lang:'Svenska'},
  {key:'tr_TR',lang:'Türkçe'},
  {key:'ur_PK',lang:'اردو'},
  {key:'zh_CN',lang:'中文'},
  {key:'zh_HK',lang:'繁體中文'},
]

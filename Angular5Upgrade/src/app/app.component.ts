import { WindowRefService } from './Services/window-ref.service';
import { ConfigurationService } from './Services/configuration.service';
import { Component, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgZone } from '@angular/core';
import { TestService } from './Services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  screen:any={};
  applicationName:string = 'OWASP juice shop';
  gitHubRibbon = 'orange';
  notifications=[];
  theme:string;
  opened:boolean=false;
  constructor(private confServe:ConfigurationService,private translate:TranslateService,
    private windowRef:WindowRefService,private ngZone:NgZone,
    private testServe:TestService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.windowRef.nativeWIndow.onresize = (evt)=>{
        this.screen.width=this.windowRef.nativeWIndow.innerWidth;
        this.screen.height=this.windowRef.nativeWIndow.innerHeight;
        console.log(this.screen.width);
        this.ngZone.run(()=>{
          this.screen.width=this.windowRef.nativeWIndow.innerWidth;
          this.screen.height=this.windowRef.nativeWIndow.innerHeight;
          console.log(this.screen.width);
          if(this.screen.width<=500)
            this.opened=true;
          else
            this.opened=false;

        });
    }
  }

  ngOnInit(){
    this.confServe.getApplicationConfiguration().subscribe((confData)=>{
      if (confData && confData.application && confData.application.name !== null) {
        this.applicationName = confData.application.name
      }
      if (confData && confData.application && confData.application.gitHubRibbon !== null) {
        this.gitHubRibbon = confData.application.gitHubRibbon !== 'none' ? confData.application.gitHubRibbon : null
      }
      // TODO Remove backward-compatibility of `showGitHubRibbon` config property in v7.0.0
      if (confData && confData.application && confData.application.showGitHubRibbon === false) {
        console.log('Configuration property "application.showGitHubRibbon" is deprecated. Please use "application.gitHubRibbon" instead. See https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/customization.html#yaml-configuration-file')
        this.gitHubRibbon = 'none';
      }
      console.log(confData);
      this.theme=confData.application.theme;
    });
  }

  isLoggedIn(){
    //Returns token from localstorage if found!
  }

  closeNotification(index){
    this.notifications.splice(index,1);
  }

  test(){
    this.testServe.testConfiguration().subscribe((confData:any)=>{
      if (confData && confData.application && confData.application.name !== null) {
        this.applicationName = confData.application.name
      }
      if (confData && confData.application && confData.application.gitHubRibbon !== null) {
        this.gitHubRibbon = confData.application.gitHubRibbon !== 'none' ? confData.application.gitHubRibbon : null
      }
      // TODO Remove backward-compatibility of `showGitHubRibbon` config property in v7.0.0
      if (confData && confData.application && confData.application.gitHubRibbon === '') {
        console.log('Configuration property "application.showGitHubRibbon" is deprecated. Please use "application.gitHubRibbon" instead. See https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/customization.html#yaml-configuration-file')
        this.gitHubRibbon = 'none';
      }
      this.theme=confData.application.theme;
    });
  }
}

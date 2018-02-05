import { ConfigurationService } from './Services/configuration.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName:string = 'OWASP juice shop';
  gitHubRibbon = 'orange';
  notifications=[];
  width;
  constructor(private confServe:ConfigurationService){
    this.width=screen.width;
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
    });
  }

  isLoggedIn(){
    //Returns token from localstorage if found!
  }

  closeNotification(index){
    this.notifications.splice(index,1);
  }

}

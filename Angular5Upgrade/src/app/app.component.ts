import { WindowRefService } from './Services/window-ref.service';
import { ConfigurationService } from './Services/configuration.service';
import { Component, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgZone } from '@angular/core';
import { TestService } from './Services/test.service';
import * as io from "socket.io-client";
import { environment } from './../environments/environment';
import { ChallengeService } from './Services/challenge.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public screen:any={}
  public applicationName:string = 'OWASP juice shop'
  public gitHubRibbon = 'orange'
  public notifications:any=[]
  public theme:string
  public opened:boolean=false
  private url = environment.hostServer
  private socket
  public scoreBoardSolved

  constructor(private confServe:ConfigurationService,private translate:TranslateService,
    private windowRef:WindowRefService,private ngZone:NgZone,
    private testServe:TestService,private challengeServe:ChallengeService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.windowRef.nativeWindow.onresize = (evt)=>{
        this.screen.width=this.windowRef.nativeWindow.innerWidth;
        this.screen.height=this.windowRef.nativeWindow.innerHeight;
        console.log(this.screen.width);
        this.ngZone.run(()=>{
          this.screen.width=this.windowRef.nativeWindow.innerWidth;
          this.screen.height=this.windowRef.nativeWindow.innerHeight;
          console.log(this.screen.width);
          if(this.screen.width<=500)
            this.opened=true;
          else
            this.opened=false;

        });
    }
  }

  ngOnInit(){
    console.log('Environment is ' + JSON.stringify(environment));
    this.confServe.getApplicationConfiguration().subscribe((confData) => {
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
      this.theme = confData.application.theme;
    })

    this.socket = io.connect(this.url);
    this.socket.on('challenge solved' , (data) => {
      if (data && data.challenge) {
        if (!data.hidden) {
          this.showNotification(data)
        }
        if (!data.isRestore) {
          this.saveProgress()
        }
        if (data.name === 'Score Board') {
          this.scoreBoardSolved = true
        }
        this.socket.emit('notification received', data.flag)
      }
    });

    this.socket.on('server started' ,() => {
      let continueCode;
      if(this.windowRef.nativeWindow.localstorage.get('continueCode'))
         continueCode = this.windowRef.nativeWindow.localstorage.get('continueCode')

      if(continueCode){
        this.challengeServe.restoreProgress(encodeURIComponent(continueCode)).subscribe(() => {

        })
      }
    })
  }

  isLoggedIn(){
    //Returns token from localstorage if found!
  }

  closeNotification(index){
    this.notifications.splice(index,1);
  }

  showNotification(challenge){
    console.log(challenge)
    this.notifications.push({
      message: 'You successfully solved a challenge ' +`${challenge.challenge}`,
      flag: challenge.flag,
      copied: false
    })
  }

  saveProgress(){
    this.challengeServe.continueCode().subscribe(function (continueCode) {
      if (!continueCode) {
        throw (new Error('Received invalid continue code from the sever!'))
      }

      let expireDate = new Date()
      expireDate.setDate(expireDate.getDate() + 30)
      this.windowRef.nativeWindow.localstorage.put('continueCode', continueCode, { expires: expireDate }) })
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

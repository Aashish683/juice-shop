import { WindowRefService } from './../Services/window-ref.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=true;
  user:any={};
  rememberMe:boolean=false;
  error:any=null;
  emailControl=new FormControl('',[Validators.required]);
  passwordControl=new FormControl('',[Validators.required]);
  oauthProviderUrl;
  clientId;
  authorizedRedirectURIs;
  redirectUri;
  oauthUnavailable;

  constructor(private userServe:UserService,private router:Router,private windowRef:WindowRefService) {
    let email=localStorage.getItem('email');
    if(email){
      this.user={};
      this.user.email=email;
      this.rememberMe=true;
    }
    else
    this.rememberMe=false;

    this.initializeOauth(windowRef.nativeWindow);
   }

  ngOnInit() {
    // this.userServe.testServer().subscribe(x=>console.log(x));
  }

  login() {
   this.user.email = this.emailControl.value
    this.user.password = this.passwordControl.value
    this.userServe.login(this.user).subscribe((authentication: any ) => {
      console.log(authentication)
      localStorage.setItem('token', authentication.token)
      sessionStorage.bid = authentication.bid
      this.userServe.isLoggedIn = true
      this.router.navigate(['/search'])
    },
    (error) => {
      console.log(error)
      localStorage.removeItem('token')
      delete sessionStorage.bid
      this.error = error
      this.userServe.isLoggedIn = false
      this.emailControl.markAsPristine()
      this.passwordControl.markAsPristine()
    }
  );

    if (this.rememberMe) {
    localStorage.setItem('email',this.user.email);
    } else {
    localStorage.removeItem('email');
    }
  }



  googleLogin(){
    this.windowRef.nativeWindow.
    location.replace(this.oauthProviderUrl + '?client_id=' +
    this.clientId + '&response_type=token&scope=email&redirect_uri=' +
    this.authorizedRedirectURIs[this.redirectUri]);
  }

  initializeOauth(window){
    console.log(window);
    this.oauthProviderUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    this.clientId = '1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com';

    this.authorizedRedirectURIs = {
    'http://demo.owasp-juice.shop': 'http://demo.owasp-juice.shop',
    'https://juice-shop.herokuapp.com': 'https://juice-shop.herokuapp.com',
    'http://juice-shop.herokuapp.com': 'http://juice-shop.herokuapp.com',
    'http://preview.owasp-juice.shop': 'http://preview.owasp-juice.shop',
    'https://juice-shop-staging.herokuapp.com': 'https://juice-shop-staging.herokuapp.com',
    'http://juice-shop-staging.herokuapp.com': 'http://juice-shop-staging.herokuapp.com',
    'http://localhost:3000': 'http://localhost:3000',
    'http://localhost:4200': 'http://localhost:4200',
    'http://juice.sh': 'http://juice.sh',
    'http://192.168.99.100:3000': 'http://tinyurl.com/ipMacLocalhost'
    };
    this.redirectUri = window.location.protocol + '//' + window.location.host;
    this.oauthUnavailable = !this.authorizedRedirectURIs[this.redirectUri];
    if (this.oauthUnavailable) {
      console.log(this.redirectUri + ' is not an authorized redirect URI for this application.')
    }
  }


}

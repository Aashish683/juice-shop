import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Services/user.service';
import { MatIconModule, MatFormFieldModule, MatCardModule,MatCheckboxModule,MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { WindowRefService } from '../Services/window-ref.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


class MockRouter {
  navigate = jasmine.createSpy('navigate');
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let userServe: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatIconModule,MatFormFieldModule,
                MatCardModule,MatCheckboxModule,MatButtonModule,MatInputModule,ReactiveFormsModule,
                BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers: [UserService,WindowRefService,{provide: Router, useClass: MockRouter},
      ]
    })
    .compileComponents();
  })
);

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    userServe = TestBed.get(UserService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns error message from server to client on failed login attempt' , () => {

    component.login()
    expect(component.error).toBe('error')
   console.log(environment.hostServer)
   const req = httpMock.expectOne(environment.hostServer + '/rest/user/login')
   expect(req.request.method).toBe("POST")
   req.flush(null,{status:401,statusText:'error'})
  });

  afterEach(() => {
    httpMock.verify()
  })
});

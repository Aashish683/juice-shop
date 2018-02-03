import { ProductReviewService } from './Services/product-review.service';
import { ProductService } from './Services/product.service';
import { BasketService } from './Services/basket.service';
import { SecurityQuestionService } from './Services/security-question.service';
import { WindowRefService } from './Services/window-ref.service';
import { RecycleComponent } from './recycle/recycle.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { BasketComponent } from './basket/basket.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ComplainComponent } from './complain/complain.component';
import { ContactComponent } from './contact/contact.component';
import { AdministrationComponent } from './administration/administration.component';
import { AboutComponent } from './about/about.component';
import { ChallengeService } from './Services/challenge.service';
import { ConfigurationService } from './Services/configuration.service';
import { AdministrationService } from './Services/administration.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpModule} from '@angular/http';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './Services/user.service';
import { TableComponent } from './table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DisplayProductComponent } from './display-product/display-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common/src/common_module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    AboutComponent,
    AdministrationComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    SearchComponent,
    LogoutComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ScoreBoardComponent,
    ComplainComponent,
    RecycleComponent,
    DisplayProductComponent
  ],
  entryComponents:[DisplayProductComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'administration',
        component:AdministrationComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'basket',
        component:BasketComponent
      },
      {
        path:'search',
        component:TableComponent
      },
      {
        path:'logout',
        component:LogoutComponent
      },
      {
        path:'change-password',
        component:ChangePasswordComponent
      },
      {
        path:'forgot-password',
        component:ForgotPasswordComponent
      },
      {
        path:'score-board',
        component:ScoreBoardComponent
      },
      {
        path:'complain',
        component:ComplainComponent
      },
      {
        path:'recycle',
        component:RecycleComponent
      },
      {
        path:'**',
        component:TableComponent
      }
    ]),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [AdministrationService,
              ConfigurationService,
              UserService,
              ChallengeService,
              WindowRefService,
              SecurityQuestionService,
              BasketService,
              ProductService,
              ProductReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

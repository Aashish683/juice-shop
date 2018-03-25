import { TokenSaleComponent } from './token-sale/token-sale.component';
import { RecycleComponent } from './recycle/recycle.component';
import { ComplainComponent } from './complain/complain.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { TableComponent } from './table/table.component';
import { BasketComponent } from './basket/basket.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdministrationComponent } from './administration/administration.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
    {
        path: 'administration',
        component: AdministrationComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      },
      {
        path: 'search',
        component: TableComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'score-board',
        component: ScoreBoardComponent
      },
      {
        path: 'complain',
        component: ComplainComponent
      },
      {
        path: 'recycle',
        component: RecycleComponent
      },
      {
        path: 'tokensale-ico-ea',
        component: TokenSaleComponent
      },
      {
        path: '**',
        component: TableComponent
      }
]

export const Routing = RouterModule.forRoot(routes)

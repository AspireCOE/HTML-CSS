import { Routes } from '@angular/router';
import { AccDetailsComponent } from './acc-details/acc-details.component';
import { HomeComponent } from './home/home.component';
import { BalanceComponent } from './balance/balance.component';
import { TypeOfAccComponent } from './type-of-acc/type-of-acc.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { deActivateGuard } from './de-activate.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductComponent } from './product/product.component';
export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"acc-details",
        component:AccDetailsComponent,
        canActivate:[authGuard]
    },
    {
        path:"balance",
        component:BalanceComponent,
        canActivate:[authGuard]
    },
    {
        path:"register",
        component:TemplateDrivenFormComponent,
        canDeactivate:[deActivateGuard]
    },
    {
        path:"type",
        component:TypeOfAccComponent,
        canActivate:[authGuard]
    },
    {
        path:"login",
        component:LoginComponent,
        
    },
    {
        path:"product",
        component:ProductComponent,
        canActivate:[authGuard]
    },
    {
        path:"**",
        component:HomeComponent
    }
];




import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ProdectDetailComponent } from './prodect-detail/prodect-detail.component';
import { authGuard } from './auth.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
export const routes: Routes = [
    {
        path:"shop",
        component:ShopComponent,
        canActivate:[authGuard]
    },
    {
        path:"product",
        component:ProductComponent,
        canActivate:[authGuard]
    },
    {
        path:"student",
        component:StudentComponent,
        canActivate:[authGuard]
    },
    {
        path:"templateform",
        component:TemplateformComponent
    },
    {
        path:"producrDetail",
        component:ProdectDetailComponent,
        canActivate:[authGuard]
    },
    {
        path:"ReactiveForm",
        component:ReactiveFormComponent
    },
    {
        path:"**",
        component:ShopComponent,
        canActivate:[authGuard]
    }
    
];

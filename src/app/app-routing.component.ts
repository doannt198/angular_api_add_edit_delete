import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routerConfig: Routes = [
    { path: '', redirectTo:'\contacts' ,pathMatch:'full' },
    { path: 'contacts', component: ContactComponent }, {
      path: 'detail', component: ContactDetailComponent
    },
    { path: '**', component: PageNotFoundComponent }
  ]
@NgModule({
    imports: [
        RouterModule.forRoot(routerConfig),
      ],
    declarations: [
      ContactComponent,
      ContactDetailComponent,
      PageNotFoundComponent
    ],
      exports:[RouterModule]
    })
    export class AppRoutingModule { }
    
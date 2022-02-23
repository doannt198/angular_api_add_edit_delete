import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ComponentListPersonComponent } from './component-list-person/component-list-person.component';
import { ChildComponent } from './child.component';
import { ParrenComponent } from './parren.component';
import { AppRoutingModule } from './app-routing.component';
import { FormComponent } from './form/form.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { ReactFormSignUpComponent } from './react-form-sign-up/react-form-sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { CallApiComponent } from './call-api/call-api.component';
import { CallApiService } from './call-api.service';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { CallApiEditComponent } from './call-api-edit/call-api-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    ComponentListPersonComponent,
    ChildComponent,
    ParrenComponent,
    FormComponent,
    PipeComponentComponent,
    CustomPipesComponent,
    ReactFormSignUpComponent,
    CallApiComponent,
    AddPhoneComponent,
    CallApiEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CallApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

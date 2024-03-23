import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BestSalesItemComponent } from './best-sales-item/best-sales-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    BestSalesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

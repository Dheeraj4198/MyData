import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { AuthModule } from "./auth/auth.module";
import { VillaModule } from "./villa/villa.module";
import { VillaNumberModule } from "./villa-number/villa-number.module";
import { AuthGuard } from "./auth/Guards/auth.guard";
import { TokenIntercetporService } from "./Helpers/token-intercetpor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentRoutingModule } from "./component/component-routing.module";
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AuthModule,
    VillaModule,
    VillaNumberModule,
    ComponentRoutingModule,
    DataTablesModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercetporService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

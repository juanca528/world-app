import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//external
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './components/chart/chart.component';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    GoogleChartsModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWcCRVsUSrRkoQL43sUqdTjf1NVV3RxM4'
    })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

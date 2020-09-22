import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AllTopOffersComponent } from './all-top-offers/all-top-offers.component';
import { LatestTravelTipsComponent } from './latest-travel-tips/latest-travel-tips.component';
import { TravelDealsComponent } from './travel-deals/travel-deals.component';
import { BestDealsForFlightsComponent } from './best-deals-for-flights/best-deals-for-flights.component';
import { TopDestinationsComponent } from './top-destinations/top-destinations.component';
import { PopularRoutesComponent } from './popular-routes/popular-routes.component';
import { PopularDeparturePointsComponent } from './popular-departure-points/popular-departure-points.component';
import { SendDealsComponent } from './send-deals/send-deals.component';
import { FindDealsComponent } from './find-deals/find-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllTopOffersComponent,
    LatestTravelTipsComponent,
    TravelDealsComponent,
    BestDealsForFlightsComponent,
    TopDestinationsComponent,
    PopularRoutesComponent,
    PopularDeparturePointsComponent,
    SendDealsComponent,
    FindDealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

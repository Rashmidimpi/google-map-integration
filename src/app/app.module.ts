import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DataLabelService, LegendService, MapsModule, MapsTooltipService } from '@syncfusion/ej2-angular-maps';
import { GoogleMapsComponent } from './google-maps/google-maps.component'
import { GoogleMapsModule } from "@angular/google-maps";
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GoogleMapsComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule,
    GoogleMapsModule
    
  ],
  providers: [provideHttpClient(),LegendService, DataLabelService,MapsTooltipService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

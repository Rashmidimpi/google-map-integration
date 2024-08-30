import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsComponent
  },
  {
    path: 'google-api',
    component: GoogleMapsComponent
  },
{
  path: 'map',
  component: MapComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

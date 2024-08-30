import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss'
})
export class GoogleMapsComponent implements OnInit{
  // options: google.maps.MapOptions = {
  //   mapId: "4ad3857d230fb3b1",
  //   center: { lat: 39.8283, lng: -98.5795 },
  //   zoom: 4,
  // };

  // options: google.maps.MapOptions = {
  //   center: { lat: 39.8283, lng: -98.5795 },
  //   zoom: 4,
  //   styles: [
  //     {
  //       featureType: 'administrative',
  //       elementType: 'labels',
  //       stylers: [
  //         { visibility: 'off' }
  //       ]
  //     },
  //     {
  //       featureType: 'road',
  //       elementType: 'geometry.stroke',
  //       stylers: [
  //         { color: '#ffffff' }
  //       ]
  //     }
  //   ]
  // };

  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 39.8283, lng: -98.5795 }, // Center of the US
  //   zoom: 4, // Zoom level to show the entire country
  // };

  // stateName: string | null = null;

  // ngOnInit(): void {}

  // // This function is triggered when the map is clicked
  // onMapClick(event: google.maps.MapMouseEvent): void {
  //   if (event.latLng) {
  //     // Example: Display latitude and longitude in the tooltip
  //     this.stateName = `Lat: ${event.latLng.lat()}, Lng: ${event.latLng.lng()}`;
  //   }
  // }

  // different
  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 39.8283, lng: -98.5795 }, // Center of the US
  //   zoom: 4, // Zoom level to show the entire country
  // };

  // markers: { position: google.maps.LatLngLiteral; label: string }[] = [
  //   { position: { lat: 37.0902, lng: -95.7129 }, label: 'Center of the US' }, // Example
  //   { position: { lat: 40.7128, lng: -74.0060 }, label: 'New York' },
  //   { position: { lat: 34.0522, lng: -118.2437 }, label: 'Los Angeles' },
  //   // Add more states and their centers here
  // ];
  // // Store currently selected state
  // selectedState: string | null = null;

  // constructor() {}

  // ngOnInit(): void {}

  // // Method to handle marker clicks
  // onMarkerClick(label: string): void {
  //   this.selectedState = label;
  // }

  @ViewChild(GoogleMap) map!: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    mapId: "86da14ac1b3151a6",
    center: { lat: 34.9119, lng: -98.4842 }, // Center of the US
    zoom: 4.1, 
    zoomControl: false,
    disableDoubleClickZoom: true,
    fullscreenControl:false,
  };
  

  markers: {
    position: google.maps.LatLngLiteral;
    label: string;
    licenseNumber: string;
    licenseActive: boolean;
  }[] = [
    { position: { lat: 40.7128, lng: -74.0060 }, label: 'New York', licenseNumber: '1234', licenseActive: false },
    { position: { lat: 34.0522, lng: -118.2437 }, label: 'Los Angeles', licenseNumber: '5678', licenseActive: true },
    { position: { lat: 43.075968, lng: -107.290284 }, label: 'Wyoming', licenseNumber: '9101', licenseActive: false },
    { position: { lat: 36.778259, lng: -119.417931 }, label: 'California', licenseNumber: '1121', licenseActive: true },
    { position: { lat: 31.9686, lng: -99.9018 }, label: 'Texas', licenseNumber: '1234', licenseActive: true },

  ];
  selectedStateInfo: string | null = null;  
  tooltipPosition = { x: 0, y: 0 };
  constructor() {}

  ngOnInit(): void {}

  onMarkerClick(marker: {
    label: string;
    position: google.maps.LatLngLiteral;
    licenseNumber: string;
    licenseActive: boolean;
  }): void {
    // Update tooltip content to show license number and active status
    const licenseStatus = marker.licenseActive ? 'Active' : 'Inactive';
    this.selectedStateInfo = `${marker.label} , License Number: ${marker.licenseNumber}, Status: ${licenseStatus}`;
    
    this.getTooltipPosition(marker.position);
  }


  // Method to calculate the tooltip position based on marker position
  getTooltipPosition(position: google.maps.LatLngLiteral): void {
    const scale = Math.pow(2, this.map.getZoom()!);
    const nw = new google.maps.LatLng(
      this.map.getBounds()!.getNorthEast().lat(),
      this.map.getBounds()!.getSouthWest().lng()
    );
  
    const worldCoordinateNW = this.map?.getProjection()?.fromLatLngToPoint(nw)!;
    const worldCoordinate = this.map?.getProjection()?.fromLatLngToPoint(new google.maps.LatLng(position.lat, position.lng))!;
    const pixelOffset = new google.maps.Point(
      Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
      Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
    );
  
  
    this.tooltipPosition = { x: pixelOffset.x, y: pixelOffset.y };
  }

}

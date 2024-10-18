import { Component, OnInit } from '@angular/core';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 45.6427;
  longitude = 25.5887;
  zoom = 12;
  minZoom = 0;
  maxZoom = 22;
  bearing = 0;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;

  constructor() {}

  ngOnInit() {}

  onMapReady(event) {
    this.mapView = event.object;
    // Add markers for stations here
  }

  onCoordinateTapped(args) {
    console.log('Coordinate Tapped, Lat: ' + args.position.latitude + ', Lon: ' + args.position.longitude);
  }

  onMarkerSelect(args) {
    console.log('Marker Selected');
  }

  onMarkerBeginDragging(args) {
    console.log('Marker Begin Dragging');
  }

  onMarkerEndDragging(args) {
    console.log('Marker End Dragging');
  }

  onMarkerDrag(args) {
    console.log('Marker Drag');
  }
}
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: any[] = [
    { id: 1, name: 'Station 1' },
    { id: 2, name: 'Station 2' },
    { id: 3, name: 'Station 3' },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {}

  onStationTap(stationId: number) {
    // Navigate to station details or bus lines passing through this station
    this.routerExtensions.navigate(['/bus-line', stationId]);
  }
}
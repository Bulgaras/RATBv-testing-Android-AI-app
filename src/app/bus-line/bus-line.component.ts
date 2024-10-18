import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: ['./bus-line.component.css']
})
export class BusLineComponent implements OnInit {
  busLineId: number;
  stations: any[] = [
    { id: 1, name: 'Station 1', time: '10:00' },
    { id: 2, name: 'Station 2', time: '10:15' },
    { id: 3, name: 'Station 3', time: '10:30' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.busLineId = +this.route.snapshot.paramMap.get('id');
    // Fetch bus line data based on the ID
  }
}
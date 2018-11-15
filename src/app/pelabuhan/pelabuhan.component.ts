import { Component, OnInit } from '@angular/core';
import { Pelabuhan } from '../model/model';

@Component({
  selector: 'app-pelabuhan',
  templateUrl: './pelabuhan.component.html',
  styleUrls: ['./pelabuhan.component.css']
})

export class PelabuhanComponent implements OnInit {
  pelabuhan: Pelabuhan[] = [
    {id : '1', pelabuhan_name: 'Tanjung Priuk', kota_name: 'Jakarta'},
    {id : '2', pelabuhan_name: 'Tanjung Mas', kota_name: 'Semarang'},
    {id : '3', pelabuhan_name: 'Tanjung Intan', kota_name: 'Cilacap'},
    {id : '4', pelabuhan_name: 'Batu Guluk', kota_name: 'Madura'},
    {id : '5', pelabuhan_name: 'Kalimas', kota_name: 'Surabaya'},
    {id : '6', pelabuhan_name: 'Tanjung Wangi', kota_name: 'Banyuwangi'}
  ];
  constructor() { }

  ngOnInit() {
  }


}


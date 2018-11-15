import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  rootDirectory: any[] = [
    {
        name: 'Applications',
        icon: 'folder',
        expanded: true,
        files: [
            {
                icon: 'calendar',
                name: 'Calendar',
                active: true
            },
            {
                icon: 'line-chart',
                name: 'Charts',
                active: false
            },
            {
                icon: 'dashboard',
                name: 'Dashboard',
                active: false
            },
            {
                icon: 'map',
                name: 'Maps',
                active: false
            },
        ]
    },
    {
        name: 'Files',
        icon: 'folder',
        expanded: false,
        files: [
            {
                icon: 'file',
                name: 'Cover Letter.doc',
                active: false
            },
        ]
    },
    {
        name: 'Images',
        icon: 'folder',
        expanded: false,
        files: [
            {
                icon: 'image',
                name: 'Screenshot.png',
                active: false
            },
        ]
    }
];

openFile(directoryName: string, fileName: string) {

}
  constructor() { }
  ngOnInit() {
  }

}



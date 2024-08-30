import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usa_map } from './world-map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
  public tooltipSettings?: object;
    public shapeData?: object;
    public shapeSettings?: object;
    public dataLabelSettings?: object;

    constructor(private router: Router){}

    ngOnInit(): void {
        this.shapeData = usa_map;
        this.shapeSettings = {
            autofill: true
        };
        this.tooltipSettings = {
            visible: true,
            valuePath: 'name',
            
        };
        this.dataLabelSettings = {
            visible: true,
            smartLabelMode: 'Hide',
            intersectionAction: 'Trim',
            labelPath: 'name',
            animationDuration: 2000
        };
    }

    next(){
        this.router.navigate(['/google-api']);
    }
  
}

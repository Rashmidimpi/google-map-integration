import { Component, ElementRef, OnInit } from '@angular/core';
import * as topojson from 'topojson-client';
import * as d3 from 'd3';
import { TopographyService } from './topography.service';
import { FeatureCollection, Geometry } from 'geojson';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'map-integration';
  // svg: any;
  // projection: any;
  // topoFeatureStates: any;
  // path: any;
              

  // constructor(private topographyService: TopographyService,
  //   private el: ElementRef) { }

  //   ngOnInit(): void {
  //     this.initialMap();
  //   }
  
  //   initialMap(): void {
  //     this.topographyService.getTopographyData().subscribe((topography: any) => {
  //       this.draw(topography);
  //     });
  //   }
  
  //   draw(topography: any): void {
  //     const { width, height } = this.getMapContainerWidthAndHeight();
  
  //     this.topoFeatureStates = topojson.feature(
  //       topography,
  //       topography.objects.states
  //     );
  //     this.projection = d3
  //       .geoIdentity()
  //       .fitSize([width, height], this.topoFeatureStates);
  
  //     this.path = d3.geoPath(this.projection);
  
  //     // render svg
  //     this.svg = d3
  //       .select('svg')
  //       .attr('width', width + 50)
  //       .attr('height', height);
  
  //     this.renderNationFeaturesWithShadow(topography);
  //     this.renderCountiesFeatures(topography);
  //     this.renderStateFeaures(topography);
  
  //     // resize event
  //     d3.select(window).on('resize', this.resizeMap);
  //   }
  
  //   renderNationFeaturesWithShadow(topography: any): void {
  //     const defs = this.svg.select('defs');
  //     defs
  //       .append('path')
  //       .datum(topojson.feature(topography, topography.objects.nation))
  //       .attr('id', 'nation')
  //       .attr('d', this.path);
  
  //     this.svg
  //       .append('use')
  //       .attr('xlink:href', '#nation')
  //       .attr('fill-opacity', 0.2)
  //       .attr('filter', 'url(#blur)');
  
  //     this.svg.append('use').attr('xlink:href', '#nation').attr('fill', '#fff');
  
  //     // extra touch (counties in grid)
  //     this.svg
  //       .append('path')
  //       .attr('fill', 'none')
  //       .attr('stroke', '#777')
  //       .attr('stroke-width', 0.35)
  //       .attr(
  //         'd',
  //         this.path(
  //           topojson.mesh(
  //             topography,
  //             topography.objects.counties,
  //             (a: any, b: any) => {
  //               return ((a.id / 1000) | 0) === ((b.id / 1000) | 0);
  //             }
  //           )
  //         )
  //       );
  //   }
  
  //   renderCountiesFeatures(topography: any): void {
  //     const countiesObject = topography.objects.counties as any; 

  //     const geoJsonFeatureCollection = topojson.feature(
  //       topography,
  //       countiesObject
  //   );
  //   const countiesFeatureCollection = geoJsonFeatureCollection as unknown as FeatureCollection<Geometry, any>;

  //     this.svg
  //       .append('g')
  //       .attr('class', 'county')
  //       .attr('fill', '#fff')
  //       .selectAll('path')
  //       .data(countiesFeatureCollection.features)
  //       .join('path')
  //       .attr('id', (d: any) => {
  //         return d.id;
  //       })
  //       .attr('d', this.path);
  //   }
  
  //   renderStateFeaures(topography: any): void {
  //     const statesObject = topography.objects.states as any; 

  // const geoJsonFeatureCollection = topojson.feature(topography, statesObject);

  // const statesFeatureCollection = geoJsonFeatureCollection as unknown as FeatureCollection<Geometry, any>;
  //     this.svg
  //       .append('g')
  //       .attr('class', 'state')
  //       .attr('fill', 'none')
  //       .attr('stroke', '#BDBDBD')
  //       .attr('stroke-width', '0.7')
  //       .selectAll('path.state')
  //       .data(statesFeatureCollection.features)
  //       .join('path')
  //       .attr('id', (d: any) => {
  //         return d.id;
  //       })
  //       .attr('d', this.path);
  //   }
  
  //   resizeMap = () => {
  //     const { width, height } = this.getMapContainerWidthAndHeight();
  
  //     this.svg.attr('width', width + 50).attr('height', height);
  
  //     // update projection
  //     this.projection.fitSize([width, height], this.topoFeatureStates);
  
  //     // resize the map
  //     this.svg.selectAll('path').attr('d', this.path);
  //   };
  
  //   getMapContainerWidthAndHeight = (): { width: number; height: number } => {
  //     const mapContainerEl = this.el.nativeElement.querySelector(
  //       '#map'
  //     ) as HTMLDivElement;
  //     const width = mapContainerEl.clientWidth - 50;
  //     const height = (width / 960) * 600;
  
  //     return { width, height };
  //   };
 
}

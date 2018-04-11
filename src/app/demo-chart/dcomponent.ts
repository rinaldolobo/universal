import {Component, Input, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {pie, arc} from "d3-shape";
import {scaleOrdinal} from "d3-scale";
import {schemeSet2} from "d3-scale-chromatic";

@Component({
    selector: 'page-dwello',
    templateUrl: 'dh.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DwelloComponent implements OnInit{
  @Input() radius: number = 75;
  @Input() data = [6, 4, 7, 25, 32]; //example data
  @Input() thickness: number = 50;
  paths: string[];
  colors = scaleOrdinal(schemeSet2);

  constructor() { }

  setPath() {
    if(this.data) {
      let data = this.data;
      let arcs;
      let pieGenerator = pie().sort(() => null)
      arcs = pieGenerator(data);
      // console.log(arcs);
      /**[
       *      {"data":6,"index":0,"value":6,"startAngle":0,"endAngle":2.2175948142986774,"padAngle":0},
       *      {"data":4,"index":1,"value":4,"startAngle":2.2175948142986774,"endAngle":3.6959913571644627,"padAngle":0},
       *      {"data":7,"index":2,"value":7,"startAngle":3.6959913571644627,"endAngle":6.283185307179586,"padAngle":0}
         ]*/

      let arcGenerator = arc()
        .innerRadius(this.radius - this.thickness)
        .outerRadius(this.radius)
        .padAngle(Math.PI / 180);


      this.paths = arcs.map(arcData => {
        return arcGenerator({
          innerRadius: 3,
          outerRadius: this.radius,
          ...arcData,
        });
      });
      // console.log(this.paths);
      /** [
       *        "M0.8116147168502343,-74.9956084151025A75,75,0,0,1,…55,55,0,0,0,0.8116147168502428,-54.9940113244287Z",
       *        "M59.3586803458456,45.84263373323705A75,75,0,0,1,-3…55,55,0,0,0,43.397061294369585,33.78897854349446Z",
       *        "M-40.170149084142054,63.335291288173615A75,75,0,0,…5,55,0,0,0,-29.640665066697213,46.32959069972317Z"
          ]*/
    }
  }

  ngOnInit() {
    this.setPath()
  }
}

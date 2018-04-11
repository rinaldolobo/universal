import {Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { API } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  comps: any[] = ['Component A'];
  // ['Component A', 'Component B', 'Component A', 'Component B', 'Component A', 'Component B'];
  api1 = "https://2.intelligence.dwello.in/analysis/heuristics?name=space_optimization&product=2a56d21e-24a7-463a-be45-749a8b9bf82d";

  data: any = {"result":{"utilization":{"living_room":31.46491395470469,"lobby":0,"carpet":98.19051401869159,"master_bedroom":16.990886970161476,"terrace":3.103941079638715,"kitchen":8.39264885115099}},"significance":"space optimization tells you the ideal distribution of the carpet area for maximizing the utility value of the apartment","message":"success","guide":{"ideal":{"master_bedroom":12.704365036222725,"carpet":100,"terrace":6.352182518111363,"kitchen":9.528273777167044}},"status":"SUCCESS"};
  constructor(private cdr: ChangeDetectorRef, private api: API) {

  }

  ngOnInit() {
    // this.api.getdata('ai','space_optimization','2a56d21e-24a7-463a-be45-749a8b9bf82d').subscribe(response => {
    //   this.data = response;
    //   this.cdr.detectChanges();
    //   console.log(this.data);
    //
    // })
  }

  deleteEmitted($event) {
    console.log($event.id);
    var val = $event.id
    var i = this.comps.indexOf(val.substr(0, val.length - 1))
    console.log(i);
    if (i > -1) {
      this.comps.splice(i, 1);
      this.cdr.detectChanges();
    }
  }

  ref() {
    // this.comps = ['Component A', 'Component B', 'Component A', 'Component B', 'Component A', 'Component B'];
    this.comps = ['Component A', 'Component B', 'Component A', 'Component B', 'Component A', 'Component B', 'Component A', 'Component B', 'Component A', 'Component B', 'Component A', 'Component B'];
    // this.comps = ['AiAComponent', 'AiBComponent']
  }

  // ngAfterViewInit() {
  //   System.import('app/t.module').then((module) => {
  //       _compiler.compileModuleAndAllComponentsAsync(module.TModule)
  //         .then((compiled) => {
  //           const m = compiled.ngModuleFactory.create(this._injector);
  //           const factory = compiled.componentFactories[0];
  //           const cmp = factory.create(this._injector, [], null, m);
  //         })
  //     })
  // }
}



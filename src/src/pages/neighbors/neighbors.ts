import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-neighbors',
  templateUrl: 'neighbors.html'
})
export class Neighbors {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];

    // Discover local jedi device
    var url = 'http://raspberrypi.local:9090/';
    if(ionic.Platform.platforms.contains("browser")) {
      url = '/olsrdjson/';
    }

    this.http.get(url)
      .map(res => res.json())
      .subscribe(
         (data) => console.log(data)
      );

      /* $http.get(url).then(function(response){

      this.items.push({
        title: response.config.mainIpAddress,
        note: response.uuid,
        icon: 'wifi'
      });
  
      for (var i = 0, len = response.neighbors.length; i < len; i++) {
  
        // Discover neighbors
        var neighbor_url = 'http://'+response.neighbors[i].ipv4Address+':9090/';

        $http.get(neighbor_url).then(function(neighbor_response){
  
          this.items.push({
            title: neighbor_response.neighbors[i].ipv4Address;
            note: neighbbor_response.uuid,
            icon: 'wifi'
          });
        }, function(error){
          //there was an error fetching from the server
	  console.log("Could not retrieve neighbors from "+neighbor_url);
        });
      }
      */

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Neighbors, {
      item: item
    });
  }
}

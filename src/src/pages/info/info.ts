import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class Info {
  selectedItem: any;
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

    http.get(url)
      .map(res => res.json())
      .subscribe(
        (response) => this.items.push({
          title: 'mainIpAddress',
          note: response.config.mainIpAddress,
          icon: 'wifi'
	})
      );
  }

}

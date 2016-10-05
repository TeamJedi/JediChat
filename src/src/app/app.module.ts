import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Neighbors } from '../pages/neighbors/neighbors';
import { Topology } from '../pages/topology/topology';
import { Info } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    Neighbors,
    Topology,
    Info
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Neighbors,
    Topology,
    Info
  ],
  providers: []
})
export class AppModule {}

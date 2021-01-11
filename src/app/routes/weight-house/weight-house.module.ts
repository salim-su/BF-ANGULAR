import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { WeightHouseRoutingModule } from './weight-house-routing.module';

const COMPONENTS = [
];
const COMPONENTS_NOROUNT = [
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
  imports: [
    CommonModule,
    WeightHouseRoutingModule,
    SharedModule,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class WeightHouseModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestSharedModule } from 'app/shared';
import {
  LocationComponent,
  LocationDetailComponent,
  LocationUpdateComponent,
  LocationDeletePopupComponent,
  LocationDeleteDialogComponent,
  locationRoute,
  locationPopupRoute
} from './';

const ENTITY_STATES = [...locationRoute, ...locationPopupRoute];

@NgModule({
  imports: [TestSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    LocationComponent,
    LocationDetailComponent,
    LocationUpdateComponent,
    LocationDeleteDialogComponent,
    LocationDeletePopupComponent
  ],
  entryComponents: [LocationComponent, LocationUpdateComponent, LocationDeleteDialogComponent, LocationDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestLocationModule {}

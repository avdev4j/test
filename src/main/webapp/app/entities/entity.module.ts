import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#TestRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#TestCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#TestLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#TestDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#TestTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#TestEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#TestJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#TestJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestEntityModule {}

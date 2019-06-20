import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestSharedModule {
  static forRoot() {
    return {
      ngModule: TestSharedModule
    };
  }
}

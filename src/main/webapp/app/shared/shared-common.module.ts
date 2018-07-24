import { NgModule } from '@angular/core';

import { JhipsterSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterSampleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSampleSharedCommonModule {}

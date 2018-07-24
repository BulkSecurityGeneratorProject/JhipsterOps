import { NgModule } from '@angular/core';

import { Oauth2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Oauth2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Oauth2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Oauth2SharedCommonModule {}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';

import { appRoutes } from './app.routes';
import { PreviewService } from './services/preview.service';
import { FileViewComponent } from './file-view/file-view.component';

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SiteComponent } from './site/site.component';
import { AppCommonModule } from './app-common/app-common.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),

    // ADF modules
    CoreModule.forRoot(),
    ContentModule.forRoot(),

    AppCommonModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DocumentlistComponent,
    AppLayoutComponent,
    FileViewComponent,
    SiteComponent
  ],
  providers: [PreviewService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

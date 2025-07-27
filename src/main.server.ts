import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './main.config';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;

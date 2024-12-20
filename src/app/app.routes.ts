import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'main-content', component: MainContentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

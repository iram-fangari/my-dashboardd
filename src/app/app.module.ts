import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from 'src/components/chat/chat.component';
import { ClassesComponent } from 'src/components/classes/classes.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { LatestResultsComponent } from 'src/components/latest-results/latest-results.component';
import { LearningPlanComponent } from 'src/components/learning-plan/learning-plan.component';
import { LogoutComponent } from 'src/components/logout/logout.component';
import { ResourcesComponent } from 'src/components/resources/resources.component';
import { SettingsComponent } from 'src/components/settings/settings.component';
import { SideDashboardComponent } from 'src/components/side-dashboard/side-dashboard.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { TimeSpentOnLearningComponent } from 'src/components/time-spent-on-learning/time-spent-on-learning.component';
// import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    SideDashboardComponent,
    SidebarComponent,
    DashboardComponent,
    LogoutComponent,
    ClassesComponent,
    ResourcesComponent,
    LearningPlanComponent,
    ChatComponent,
    SettingsComponent,
    LatestResultsComponent,
    TimeSpentOnLearningComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

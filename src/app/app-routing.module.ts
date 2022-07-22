import { ResourcesComponent } from '../components/resources/resources.component';
import { ClassesComponent } from '../components/classes/classes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LogoutComponent } from 'src/components/logout/logout.component';
import { SideDashboardComponent } from 'src/components/side-dashboard/side-dashboard.component';
import { LearningPlanComponent } from 'src/components/learning-plan/learning-plan.component';
import { ChatComponent } from 'src/components/chat/chat.component';
import { SettingsComponent } from 'src/components/settings/settings.component';

const routes: Routes = [
  { path:'sidebar', component: SidebarComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'side-dashboard', component: SideDashboardComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'learning-plan', component: LearningPlanComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'setting', component: SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

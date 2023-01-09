import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { EducacionComponent } from './educacion/educacion.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HeaderComponent } from './header/header.component';
import { LogoapComponent } from './logoap/logoap.component';
import { RedesComponent } from './redes/redes.component';
import { SkillsComponent } from './skills/skills.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EducacionComponent,
    BannerComponent,
    ExperienciaComponent,
    HeaderComponent,
    LogoapComponent,
    RedesComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

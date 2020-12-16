import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    SharedModule,
    FormsModule,
    HeroDetailRoutingModule,
    FontAwesomeModule,
  ],
  exports: [HeroDetailComponent],
})
export class HeroDetailModule {}

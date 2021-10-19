import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from '../../shared/ng-zorro-ant-module';
import { ScrollSpyDirective } from '../../shared/scroll-spy-directive';

@NgModule({
  declarations: [HomeComponent,ScrollSpyDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule    
  ]
})
export class HomeModule { }

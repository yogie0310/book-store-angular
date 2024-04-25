import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbaarComponent } from './components/toolbaar/toolbaar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbaarComponent,
  ],
  imports: [
    CommonModule,

    MaterialModule
  ],
  exports: [
    ToolbaarComponent
  ]
})
export class SharedModule { }

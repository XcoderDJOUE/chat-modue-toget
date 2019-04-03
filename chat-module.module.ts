import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleButtonComponent } from './toogle-button/toogle-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [ToogleButtonComponent],
  exports: [
    ToogleButtonComponent,
    MatButtonModule, MatCheckboxModule
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class ChatModuleModule { }

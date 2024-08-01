import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {ChangeDetectionStrategy, Component} from '@angular/core';

const modules=[
  MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, NgFor, NgIf, MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...modules
  ],
  exports: modules
})
export class MaterialModule { }

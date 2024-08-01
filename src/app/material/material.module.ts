import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
const modules=[
  MatDialogModule,MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, NgFor, NgIf, MatListModule, NgClass, 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...modules
  ],
  exports: modules
})
export class MaterialModule { }

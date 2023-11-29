// material.module.ts

import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // Add other Angular Material modules as needed
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // Add other Angular Material modules as needed
  ],
})
export class MaterialModule {}

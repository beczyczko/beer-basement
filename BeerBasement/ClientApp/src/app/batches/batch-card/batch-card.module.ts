import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { BatchCardComponent } from './batch-card.component';

@NgModule({
    declarations: [BatchCardComponent],
    imports: [
        CommonModule,
        MatCardModule
    ],
    exports: [BatchCardComponent]
})
export class BatchCardModule { }

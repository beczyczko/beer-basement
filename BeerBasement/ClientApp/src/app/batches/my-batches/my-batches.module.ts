import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBatchesComponent } from './my-batches.component';
import { MyBatchesRoutingModule } from './my-batches-routing.module';
import { BatchCardModule } from '../batch-card/batch-card.module';

@NgModule({
    declarations: [MyBatchesComponent],
    imports: [
        CommonModule,
        MyBatchesRoutingModule,
        BatchCardModule
    ]
})
export class MyBatchesModule { }

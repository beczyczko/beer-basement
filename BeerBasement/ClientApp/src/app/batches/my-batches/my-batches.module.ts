import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBatchesComponent } from './my-batches.component';
import { MyBatchesRoutingModule } from './my-batches-routing.module';

@NgModule({
    declarations: [MyBatchesComponent],
    imports: [
        CommonModule,
        MyBatchesRoutingModule
    ]
})
export class MyBatchesModule { }

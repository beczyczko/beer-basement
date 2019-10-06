import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBatchesComponent } from './my-batches.component';

const routes: Routes = [
    { path: '', component: MyBatchesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyBatchesRoutingModule { }

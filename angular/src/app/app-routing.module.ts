import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactContainerComponent } from "./react-container/react-container.component";

const routes: Routes = [{ path: "react", component: ReactContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

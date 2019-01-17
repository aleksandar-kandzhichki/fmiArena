import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: "app/client/client.module#ClientModule",
    },
    {
        path: 'admin',
        loadChildren: "app/admin/admin.module#AdminModule",
    }
]
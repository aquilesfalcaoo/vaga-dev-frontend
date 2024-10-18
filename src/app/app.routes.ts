import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadComponent: () =>
      import("./pages/auth/login/login.component").then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./pages/dashboard/dashboard.component").then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: "users",
    loadComponent: () =>
      import("./pages/users/users.component").then((c) => c.UsersComponent),
  },
];

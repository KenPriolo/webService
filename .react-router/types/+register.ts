import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/login": {};
  "/branch_login": {};
  "/signup": {};
  "/branch_signup": {};
  "/forget_password": {};
  "/branch_forget_password": {};
  "/dashboard": {};
  "/dashboard/advertisement-management": {};
  "/dashboard/taxi-fleet-management": {};
  "/dashboard/analytics-reporting": {};
  "/dashboard/ticketing-system": {};
  "/dashboard/uploads": {};
  "/dashboard/locations": {};
  "/dashboard/schedule-duration": {};
  "/dashboard/ctr-conversions": {};
  "/dashboard/settings": {};
  "/branch-dashboard": {};
  "/branch-dashboard/branch-ticketing-system": {};
  "/branch-dashboard/branch-advertisement-management": {};
  "/branch-dashboard/branch-analytics-reporting": {};
  "/branch-dashboard/branch-schedule-duration": {};
  "/branch-dashboard/branch-settings": {};
};
import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/login": {};
  "/login/signup": {};
  "/login/forget-password": {};
  "/signup": {};
  "/forget-password": {};
  "/branch-dashboard": {};
  "/branch-dashboard/branch-ticketing-system": {};
  "/branch-dashboard/branch-advertisement-management": {};
  "/branch-dashboard/branch-analytics-reporting": {};
  "/branch-dashboard/branch-schedule-duration": {};
  "/branch-dashboard/branch-uploads": {};
  "/branch-dashboard/branch-settings": {};
  "/admin-dashboard": {};
  "/admin-dashboard/admin-advertisement-management": {};
  "/admin-dashboard/admin-taxi-fleet-management": {};
  "/admin-dashboard/admin-analytics-reporting": {};
  "/admin-dashboard/admin-ticketing-system": {};
  "/admin-dashboard/admin-uploads": {};
  "/admin-dashboard/admin-locations": {};
  "/admin-dashboard/admin-schedule-duration": {};
  "/admin-dashboard/admin-views-calculation": {};
  "/admin-dashboard/admin-settings": {};
};
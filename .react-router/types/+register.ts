import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/admin-login": {};
  "/branch-login": {};
  "/admin-signup": {};
  "/branch-signup": {};
  "/admin-forget-password": {};
  "/branch-forget-password": {};
  "/admin-dashboard": {};
  "/admin-dashboard/admin-advertisement-management": {};
  "/admin-dashboard/admin-taxi-fleet-management": {};
  "/admin-dashboard/admin-analytics-reporting": {};
  "/admin-dashboard/admin-ticketing-system": {};
  "/admin-dashboard/admin-uploads": {};
  "/admin-dashboard/admin-locations": {};
  "/admin-dashboard/admin-schedule-duration": {};
  "/admin-dashboard/admin-ctr-conversions": {};
  "/admin-dashboard/admin-settings": {};
  "/branch-dashboard": {};
  "/branch-dashboard/branch-ticketing-system": {};
  "/branch-dashboard/branch-advertisement-management": {};
  "/branch-dashboard/branch-analytics-reporting": {};
  "/branch-dashboard/branch-schedule-duration": {};
  "/branch-dashboard/branch-settings": {};
};
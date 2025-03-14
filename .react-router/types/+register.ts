import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/login": {};
  "/signup": {};
  "/forget_password": {};
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
};
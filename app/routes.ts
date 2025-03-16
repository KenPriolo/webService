import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"), // Home route
  route("/admin-login", "appAdmin/auth/sign-In/LoginPage.jsx"),
  route("/branch-login", "appBranch/auth/sign-In/LoginPage.jsx"),
  route("/admin-signup", "appAdmin/auth/sign-In/SignUpPage.jsx"),
  route("/branch-signup", "appBranch/auth/sign-In/SignUpPage.jsx"),
  route("/admin-forget-password", "appAdmin/auth/forgetpassword/ResetPassword.jsx"),
  route("/branch-forget-password", "appBranch/auth/forgetpassword/ResetPassword.jsx"),

  // ✅ Use children properly inside the dashboard route
  route("/admin-dashboard", "appAdmin/dashboard/DashboardLayout.jsx", [
    index("appAdmin/dashboard/AdminDashboard.jsx"), // Default dashboard page

    route("admin-advertisement-management", "appAdmin/dashboard/AdvertisementManagement.jsx"),
    route("admin-taxi-fleet-management", "appAdmin/dashboard/TaxiFleetManagement.jsx"),
    route("admin-analytics-reporting", "appAdmin/dashboard/AnalyticsAndReporting.jsx"),
    route("admin-ticketing-system", "appAdmin/dashboard/AdminTicketingSystem.jsx"),
    route("admin-uploads", "appAdmin/dashboard/UploadsPage.jsx"), // ✅ Correctly added Uploads Page
    route("admin-locations", "appAdmin/dashboard/LocationsPage.jsx"),
    route("admin-schedule-duration", "appAdmin/dashboard/ScheduleDuration.jsx"),
    route("admin-ctr-conversions", "appAdmin/dashboard/CTRConversions.jsx"),
    route("admin-settings", "appAdmin/dashboard/SettingsPage.jsx"), // ✅ Fixed typo ("settngs" → "settings")
  ]),

  route("/branch-dashboard", "appBranch/dashboard/DashboardLayout.jsx", [
    index("appBranch/dashboard/BranchDashboard.jsx"), // Default dashboard page

    route("branch-ticketing-system", "appBranch/dashboard/BranchTicketingSystem.jsx"),
    route("branch-advertisement-management", "appBranch/dashboard/AdvertisementManagement.jsx"),
    route("branch-analytics-reporting", "appBranch/dashboard/AnalyticsReporting.jsx"),
    route("branch-schedule-duration", "appBranch/dashboard/ScheduleDuration.jsx"),
    route("branch-settings", "appBranch/dashboard/Settings.jsx"),



  ]),

] satisfies RouteConfig;

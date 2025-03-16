import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),

  // ADMIN AUTH ROUTES
  route("/admin-login", "appAdmin/auth/sign-In/LoginPage.jsx"),
  route("/admin-signup", "appAdmin/auth/sign-In/SignUpPage.jsx"),
  route("/admin-forget-password", "appAdmin/auth/forgetpassword/ResetPassword.jsx"),

  // BRANCH AUTH (with AuthLayout as parent route)
  route("/branch-login", "appBranch/auth/AuthLayout.jsx", [
    index("appBranch/auth/sign-In/LoginPage.jsx"),
    route("signup", "appBranch/auth/sign-In/SignUpPage.jsx"),
    route("forget-password", "appBranch/auth/forgetpassword/ResetPassword.jsx"),
  ]),

  // Redirects using components
  route("/branch-signup", "appBranch/redirects/BranchSignupRedirect.jsx"),
  route("/branch-forget-password", "appBranch/redirects/BranchForgetPasswordRedirect.jsx"),

  // BRANCH dashboard
  route("/branch-dashboard", "appBranch/dashboard/DashboardLayout.jsx", [
    index("appBranch/dashboard/BranchDashboard.jsx"),
    route("branch-ticketing-system", "appBranch/dashboard/BranchTicketingSystem.jsx"),
    route("branch-advertisement-management", "appBranch/dashboard/AdvertisementManagement.jsx"),
    route("branch-analytics-reporting", "appBranch/dashboard/AnalyticsReporting.jsx"),
    route("branch-schedule-duration", "appBranch/dashboard/ScheduleDuration.jsx"),
    route("branch-settings", "appBranch/dashboard/Settings.jsx"),
  ]),

  // ADMIN dashboard
  route("/admin-dashboard", "appAdmin/dashboard/DashboardLayout.jsx", [
    index("appAdmin/dashboard/AdminDashboard.jsx"),
    route("admin-advertisement-management", "appAdmin/dashboard/AdvertisementManagement.jsx"),
    route("admin-taxi-fleet-management", "appAdmin/dashboard/TaxiFleetManagement.jsx"),
    route("admin-analytics-reporting", "appAdmin/dashboard/AnalyticsAndReporting.jsx"),
    route("admin-ticketing-system", "appAdmin/dashboard/AdminTicketingSystem.jsx"),
    route("admin-uploads", "appAdmin/dashboard/UploadsPage.jsx"),
    route("admin-locations", "appAdmin/dashboard/LocationsPage.jsx"),
    route("admin-schedule-duration", "appAdmin/dashboard/ScheduleDuration.jsx"),
    route("admin-ctr-conversions", "appAdmin/dashboard/CTRConversions.jsx"),
    route("admin-settings", "appAdmin/dashboard/SettingsPage.jsx"),
  ]),
] satisfies RouteConfig;

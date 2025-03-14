import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"), // Home route
  route("/login", "appAdmin/auth/sign-In/LoginPage.jsx"),
  route("/signup", "appAdmin/auth/sign-In/SignUpPage.jsx"),
  route("/forget_password", "appAdmin/auth/forgetpassword/ResetPassword.jsx"),

  // ✅ Use children properly inside the dashboard route
  route("/dashboard", "appAdmin/dashboard/DashboardLayout.jsx", [
    index("appAdmin/dashboard/AdminDashboard.jsx"), // Default dashboard page

    route("advertisement-management", "appAdmin/dashboard/AdvertisementManagement.jsx"),
    route("taxi-fleet-management", "appAdmin/dashboard/TaxiFleetManagement.jsx"),
    route("analytics-reporting", "appAdmin/dashboard/AnalyticsAndReporting.jsx"),
    route("ticketing-system", "appAdmin/dashboard/AdminTicketingSystem.jsx"),
    route("uploads", "appAdmin/dashboard/UploadsPage.jsx"), // ✅ Correctly added Uploads Page
    route("locations", "appAdmin/dashboard/LocationsPage.jsx"),
    route("schedule-duration", "appAdmin/dashboard/ScheduleDuration.jsx"),
    route("ctr-conversions", "appAdmin/dashboard/CTRConversions.jsx"),
    route("settings", "appAdmin/dashboard/SettingsPage.jsx"), // ✅ Fixed typo ("settngs" → "settings")
  ]),
] satisfies RouteConfig;

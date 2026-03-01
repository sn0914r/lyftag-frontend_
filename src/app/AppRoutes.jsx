import { Routes, Route } from "react-router-dom";
import PageLayout from "../shared/layouts/PageLayout";
import LandingPage from "../modules/landing/page/LandingPage";
import Contact from "../pages/ContactUs";
import Privacy from "../pages/PrivacyAndPolicy";
import Terms from "../pages/TermsAndConditions";
import ShippingPolicy from "../pages/ShippingPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import Login from "../modules/auth/pages/Login";
import SignUp from "../modules/auth/pages/SignUp";
import AuthLayout from "../modules/auth/Layout/AuthLayout";
import Profile from "../modules/profile/page/Profile";
import UpdateProfile from "../modules/profile/page/UpdateProfile";
import QrScan from "../modules/qr/page/QrScan";
import ReferralPage from "../modules/referrals/page/ReferralPage";
import ScrollToTop from "../shared/components/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Public standalone page — no Header/Footer */}
        <Route path="/qr/:qrId" element={<QrScan />} />

        {/* Pages */}
        <Route path="/" element={<PageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<UpdateProfile />} />
          <Route path="/referrals" element={<ReferralPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

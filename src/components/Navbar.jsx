import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Logo from "./Logo";
import { Link } from "react-router-dom";

import {
  CreditCard,
  Link2,
  FileText,
  Wallet,
  Banknote,
  Building2,
  Coins,
  QrCode,
  IndianRupee,
  Gauge,
  Zap,
  Globe,
  BarChart2,
  Layers,
  ShieldCheck,
  TrendingUp,
  Menu as MenuIcon,
  X,
} from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-4">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100",
        className
      )}
    >
      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* LOGO LEFT */}
        <Link to="/">
          <Logo />
        </Link>

        {/* CENTER MEGA MENU - DESKTOP / TABLET ONLY */}
        <div className="hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2 mt-1">
          <Menu setActive={setActive}>
            {/* PAYMENTS */}
            <MenuItem setActive={setActive} active={active} item="Payments">
              <div className="grid grid-cols-3 gap-4 text-sm p-4">
                <ProductItem
                  title="Payment Gateway"
                  description="Accept cards, UPI & wallets with a single integration."
                  href="/payments/gateway"
                  icon={CreditCard}
                />
                <ProductItem
                  title="QR Codes"
                  description="Multi-feature QR for your business."
                  href="/payments/qr-codes"
                  icon={QrCode}
                />
                <ProductItem
                  title="UPI Payments"
                  description="Discover the complete UPI stack."
                  href="/payments/upi"
                  icon={IndianRupee}
                />
                <ProductItem
                  title="Payment Links"
                  description="Share links over WhatsApp, SMS, email and get paid."
                  href="/payments/links"
                  icon={Link2}
                />
                <ProductItem
                  title="Payment Pages"
                  description="Create mini landing pages and start selling instantly."
                  href="/payments/pages"
                  icon={FileText}
                />
                <ProductItem
                  title="Subscriptions"
                  description="Set up recurring payments for your business."
                  href="/payments/subscriptions"
                  icon={Wallet}
                />
                <ProductItem
                  title="Instant Settlement"
                  description="Withdraw customer payments in seconds, anytime."
                  href="/payments/instant-settlement"
                  icon={Zap}
                />
                <ProductItem
                  title="Optimizer"
                  description="Maximize payment success rate using advanced routing."
                  href="/payments/optimizer"
                  icon={Gauge}
                />
                <ProductItem
                  title="International Payments"
                  description="Accept global cards and currencies securely."
                  href="/payments/international"
                  icon={Globe}
                />
              </div>
            </MenuItem>

            {/* BANKING */}
            <MenuItem setActive={setActive} active={active} item="Banking">
              <div className="grid grid-cols-3 gap-4 text-sm p-4">
                <ProductItem
                  title="Current Account"
                  description="Smart current accounts tailored for growing businesses."
                  href="/banking/current-account"
                  icon={Building2}
                />
                <ProductItem
                  title="Payouts"
                  description="Disburse vendor, salary and refund payouts at scale."
                  href="/banking/payouts"
                  icon={Banknote}
                />
                <ProductItem
                  title="Vendor Payments"
                  description="Automate vendor payment workflows end-to-end."
                  href="/banking/vendor-payments"
                  icon={Coins}
                />
                <ProductItem
                  title="Payroll"
                  description="Manage salaries, compliances and reimbursements."
                  href="/banking/payroll"
                  icon={Wallet}
                />
                <ProductItem
                  title="Working Capital Loans"
                  description="Quick revenue-based financing to scale your business."
                  href="/banking/loans"
                  icon={TrendingUp}
                />
                <ProductItem
                  title="Escrow Accounts"
                  description="Enable secure multi-party controlled transactions."
                  href="/banking/escrow"
                  icon={ShieldCheck}
                />
                <ProductItem
                  title="Virtual Accounts"
                  description="Automate reconciliation using unique accounts."
                  href="/banking/virtual-accounts"
                  icon={Layers}
                />
                <ProductItem
                  title="Expense Cards"
                  description="Issue and manage employee corporate cards."
                  href="/banking/expense-cards"
                  icon={CreditCard}
                />
                <ProductItem
                  title="Treasury"
                  description="Optimize and grow returns on idle business funds."
                  href="/banking/treasury"
                  icon={BarChart2}
                />
              </div>
            </MenuItem>

            {/* SUPPORT */}
            <MenuItem setActive={setActive} active={active} item="Support">
              <div className="flex flex-col space-y-3 text-sm p-4">
                <HoveredLink href="/support/help-center">
                  <span className="inline-flex items-center gap-1">
                    Help Center
                  </span>
                </HoveredLink>
                <HoveredLink href="/support/raise-ticket">
                  Raise a Ticket
                </HoveredLink>
                <HoveredLink href="/support/developers">
                  Developer Support
                </HoveredLink>
                <HoveredLink href="/support/status">System Status</HoveredLink>
              </div>
            </MenuItem>

            {/* RESOURCES */}
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-3 text-sm p-4">
                <HoveredLink href="/resources/blog">
                  <span className="inline-flex items-center gap-1">Blog</span>
                </HoveredLink>
                <HoveredLink href="/resources/webinars">
                  <span className="inline-flex items-center gap-1">
                    Webinars
                  </span>
                </HoveredLink>
                <HoveredLink href="/resources/guides">
                  Guides &amp; Playbooks
                </HoveredLink>
                <HoveredLink href="/resources/case-studies">
                  Case Studies
                </HoveredLink>
              </div>
            </MenuItem>

            {/* PRICING */}
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-3 text-sm p-4">
                <HoveredLink href="/pricing">Overall Pricing</HoveredLink>
                <HoveredLink href="/pricing/payments">
                  Payments Pricing
                </HoveredLink>
                <HoveredLink href="/pricing/banking">
                  Banking Pricing
                </HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* RIGHT SIDE: BUTTONS + MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-3">
          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-500 text-blue-600 text-sm font-semibold rounded-xl cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 border border-blue-500 text-white text-sm font-semibold rounded-xl bg-blue-600 cursor-pointer transition-all duration-200 hover:bg-blue-700 inline-flex items-center gap-2"
            >
              Sign Up <span>→</span>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-slate-200 bg-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-slate-800" />
            ) : (
              <MenuIcon className="h-5 w-5 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            {/* MOBILE LOGIN / SIGNUP */}
            <div className="flex gap-3 mb-2">
              <Link
                to="/login"
                className="flex-1 px-3 py-2 border border-blue-500 text-blue-600 text-sm font-semibold rounded-lg text-center"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg text-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </div>

            {/* Payments */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                Payments
              </p>
              <div className="space-y-1">
                <a
                  href="/payments/gateway"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <CreditCard className="h-4 w-4" />
                  Payment Gateway
                </a>
                <a
                  href="/payments/upi"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <IndianRupee className="h-4 w-4" />
                  UPI Payments
                </a>
                <a
                  href="/payments/links"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <Link2 className="h-4 w-4" />
                  Payment Links
                </a>
                <a
                  href="/payments/qr-codes"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <QrCode className="h-4 w-4" />
                  QR Codes
                </a>
              </div>
            </div>

            {/* Banking */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                Banking
              </p>
              <div className="space-y-1">
                <a
                  href="/banking/current-account"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <Building2 className="h-4 w-4" />
                  Current Account
                </a>
                <a
                  href="/banking/payouts"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <Banknote className="h-4 w-4" />
                  Payouts
                </a>
                <a
                  href="/banking/vendor-payments"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <Coins className="h-4 w-4" />
                  Vendor Payments
                </a>
                <a
                  href="/banking/payroll"
                  className="flex items-center gap-2 text-sm text-slate-700 py-1"
                >
                  <Wallet className="h-4 w-4" />
                  Payroll
                </a>
              </div>
            </div>

            {/* Simple links */}
            <div className="space-y-1">
              <a href="/pricing" className="block text-sm text-slate-700 py-1">
                Pricing
              </a>
              <a
                href="/support/help-center"
                className="block text-sm text-slate-700 py-1"
              >
                Support
              </a>
              <a
                href="/resources/blog"
                className="block text-sm text-slate-700 py-1"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

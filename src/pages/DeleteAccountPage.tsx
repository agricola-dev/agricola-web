import { useDocumentHead } from "@/hooks/useDocumentHead";
import {
  AlertTriangle,
  Mail,
  ShieldCheck,
  Smartphone,
  Trash2,
} from "lucide-react";

const whatGetsDeleted = [
  "Your profile and personal information",
  "All farm and crop records you have created",
  "Inventory and produce listings",
  "Transaction history and purchase records",
  "Saved preferences and app settings",
  "All photos and media you have uploaded",
];

const whatIsRetained = [
  "Records required by Botswana financial regulations (up to 7 years)",
  "Anonymised, aggregated usage data that cannot identify you",
  "Any communications related to unresolved disputes or refunds",
];

const steps = [
  {
    number: "01",
    title: "Open the Agricola app",
    body: "Make sure you are signed in to the account you want to delete.",
  },
  {
    number: "02",
    title: "Go to Settings",
    body: "Tap the profile icon in the top-right corner, then select Settings.",
  },
  {
    number: "03",
    title: "Select Account",
    body: 'Scroll to the Account section and tap "Manage Account".',
  },
  {
    number: "04",
    title: "Delete Account",
    body: 'Tap "Delete Account", read the confirmation prompt, and confirm your decision.',
  },
];

export function DeleteAccountPage() {
  useDocumentHead(
    "Delete Account — Agricola",
    "Learn how to permanently delete your Agricola account and understand what data is removed.",
    "/delete-account",
  );

  return (
    <section className="section-padding bg-[#FDFCF9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4332] mb-6">
            Account Management
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-[#081C15] leading-[0.95] mb-6">
            Delete Your
            <br />
            Account
          </h1>
          <p className="text-lg text-[#081C15]/60 leading-relaxed font-medium max-w-xl">
            We are sorry to see you go. This page explains how to permanently
            delete your Agricola account and what happens to your data.
          </p>
        </div>

        {/* Warning banner */}
        <div className="flex gap-4 bg-[#081C15] text-[#FDFCF9] rounded-2xl p-6 mb-16">
          <AlertTriangle className="w-6 h-6 text-[#B7E4C7] shrink-0 mt-0.5" />
          <div>
            <p className="font-black text-[#FDFCF9] mb-1">
              This action is permanent and irreversible.
            </p>
            <p className="text-sm text-[#FDFCF9]/60 font-medium leading-relaxed">
              Once your account is deleted, all associated data is removed and
              cannot be recovered. Download any records you need before
              proceeding.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Smartphone className="w-5 h-5 text-[#1B4332]" />
            <h2 className="text-2xl font-black tracking-tight text-[#081C15]">
              Delete from the App
            </h2>
          </div>
          <p className="text-[#081C15]/60 font-medium mb-10 leading-relaxed">
            The fastest way to delete your account is directly from within the
            Agricola app.
          </p>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 group">
                <span className="text-3xl font-black text-[#1B4332]/20 leading-none tabular-nums shrink-0 pt-1">
                  {step.number}
                </span>
                <div className="border-t border-[#081C15]/8 pt-5 pb-2 flex-1">
                  <p className="font-black text-[#081C15] mb-1">{step.title}</p>
                  <p className="text-[#081C15]/60 font-medium leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What gets deleted */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Trash2 className="w-5 h-5 text-[#1B4332]" />
            <h2 className="text-2xl font-black tracking-tight text-[#081C15]">
              What Gets Deleted
            </h2>
          </div>
          <ul className="space-y-3">
            {whatGetsDeleted.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#081C15]/60 font-medium">
                <span className="text-[#1B4332] font-black mt-1 shrink-0">
                  —
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What is retained */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="w-5 h-5 text-[#1B4332]" />
            <h2 className="text-2xl font-black tracking-tight text-[#081C15]">
              What We Retain
            </h2>
          </div>
          <p className="text-[#081C15]/60 font-medium mb-6 leading-relaxed">
            Certain data must be kept to comply with legal and regulatory
            obligations, even after deletion.
          </p>
          <ul className="space-y-3">
            {whatIsRetained.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#081C15]/60 font-medium">
                <span className="text-[#1B4332] font-black mt-1 shrink-0">
                  —
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Manual deletion / contact */}
        <div className="bg-[#1B4332]/5 border border-[#1B4332]/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#1B4332]" />
            <h2 className="text-2xl font-black tracking-tight text-[#081C15]">
              Need Help?
            </h2>
          </div>
          <p className="text-[#081C15]/60 font-medium leading-relaxed mb-6">
            If you are unable to delete your account from the app, or if you
            would like to request manual deletion by our team, email us
            directly. We will action your request within 30 days.
          </p>
          <a
            href="mailto:support@agricola-app.com?subject=Account%20Deletion%20Request"
            className="inline-flex items-center gap-2 bg-[#1B4332] text-white font-black px-6 py-3 rounded-full hover:bg-[#081C15] transition-colors duration-200 text-sm"
          >
            <Mail className="w-4 h-4" />
            support@agricola-app.com
          </a>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-[#081C15]/30">
            Please include your registered email address in your message.
          </p>
        </div>
      </div>
    </section>
  );
}

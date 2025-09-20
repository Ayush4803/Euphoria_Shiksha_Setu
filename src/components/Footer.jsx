import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-50 mt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="font-bold text-xl mb-2">Shiksha Setu</h3>
          <p className="text-sm leading-relaxed">
            Donate and get books at  ₹ 10-20. Supporting education across
            communities by making learning accessible for every child.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="/request" className="hover:underline">
                Request Books
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact</h4>
          <p className="text-sm">📧 hello@shikshasetu.org</p>
          <p className="text-sm mt-1">📍 Kolkata, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-950 text-center py-3 text-xs sm:text-sm">
        © {new Date().getFullYear()} Shiksha Setu. All rights reserved.
      </div>
    </footer>
  );
}

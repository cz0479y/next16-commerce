/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-divider dark:border-divider-dark mt-20 border-t bg-white py-8 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-primary mb-4 text-lg font-semibold">Commerce</h3>
            <p className="text-gray dark:text-gray text-sm leading-relaxed">
              Your trusted online marketplace for quality products with fast shipping and excellent customer service.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-medium text-black dark:text-white">Quick Links</h4>
            <ul className="text-gray dark:text-gray space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-medium text-black dark:text-white">Connect</h4>
            <p className="text-gray dark:text-gray mb-4 text-sm">
              Stay updated with our latest products and exclusive offers.
            </p>
            <div className="flex gap-2 text-sm">
              <span className="text-primary">📧</span>
              <span className="text-primary">📱</span>
              <span className="text-primary">🔔</span>
            </div>
          </div>
        </div>

        <div className="border-divider dark:border-divider-dark mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-gray dark:text-gray text-sm">© 2024 Commerce. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray hover:text-primary dark:text-gray text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray hover:text-primary dark:text-gray text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray hover:text-primary dark:text-gray text-sm transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

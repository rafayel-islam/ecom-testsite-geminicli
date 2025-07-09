import React from 'react';

function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl">Your privacy is important to us.</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Welcome to [Your Company Name]. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
            <li>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            <li>Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Create and manage your account.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
            <li>Enable user-to-user communications.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
            <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Disclosure of Your Information</h2>
          <p className="text-gray-600 mb-6">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Security of Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            Email: info@example.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;
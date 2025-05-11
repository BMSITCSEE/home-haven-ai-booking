
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</Link></li>
              <li><Link to="/aircover" className="text-gray-600 hover:text-gray-900 text-sm">AirCover</Link></li>
              <li><Link to="/safety" className="text-gray-600 hover:text-gray-900 text-sm">Safety information</Link></li>
              <li><Link to="/cancellation" className="text-gray-600 hover:text-gray-900 text-sm">Cancellation options</Link></li>
              <li><Link to="/covid" className="text-gray-600 hover:text-gray-900 text-sm">Our COVID-19 Response</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/disaster-relief" className="text-gray-600 hover:text-gray-900 text-sm">Disaster relief housing</Link></li>
              <li><Link to="/referrals" className="text-gray-600 hover:text-gray-900 text-sm">Referrals</Link></li>
              <li><Link to="/forum" className="text-gray-600 hover:text-gray-900 text-sm">Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li><Link to="/host-homes" className="text-gray-600 hover:text-gray-900 text-sm">Host your home</Link></li>
              <li><Link to="/host-experience" className="text-gray-600 hover:text-gray-900 text-sm">Host an experience</Link></li>
              <li><Link to="/responsible-hosting" className="text-gray-600 hover:text-gray-900 text-sm">Responsible hosting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm">How HomeHaven works</Link></li>
              <li><Link to="/investors" className="text-gray-600 hover:text-gray-900 text-sm">Investors</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900 text-sm">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-600">© 2025 HomeHaven, Inc.</span>
            <span className="text-sm text-gray-600">·</span>
            <Link to="/privacy" className="text-sm text-gray-600 hover:underline">Privacy</Link>
            <span className="text-sm text-gray-600">·</span>
            <Link to="/terms" className="text-sm text-gray-600 hover:underline">Terms</Link>
            <span className="text-sm text-gray-600">·</span>
            <Link to="/sitemap" className="text-sm text-gray-600 hover:underline">Sitemap</Link>
          </div>
          
          <div className="flex space-x-4">
            <span className="text-sm text-gray-600">English (US)</span>
            <span className="text-sm text-gray-600">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

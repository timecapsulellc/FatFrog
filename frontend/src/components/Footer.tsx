import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/FatFrogKingdom', icon: '🐦' },
    { name: 'Discord', href: '#', icon: '💬' },
    { name: 'Telegram', href: '#', icon: '📱' },
    { name: 'Reddit', href: '#', icon: '📢' },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-frog-green">🐸 FatFrog Kingdom</h3>
            <p className="mt-4 text-gray-600">
              Join the meme coin revolution where fun and finance leap together!
            </p>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl hover:text-frog-green transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/whitepaper" className="text-gray-600 hover:text-frog-green">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-frog-green">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-frog-green">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contract</h4>
            <p className="mt-4 text-sm text-gray-600 break-all">
              {`0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8`}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} FatFrog Kingdom Quest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

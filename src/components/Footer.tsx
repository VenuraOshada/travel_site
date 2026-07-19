import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border border-secondary/20 bg-dark">
                <img src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-1/437909289_122105267456282239_507834279489120834_n.jpg?stp=c96.143.882.882a_dst-jpg_tt6&cstp=mx882x882&ctp=s480x480&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Gb_81HrfrRkQ7kNvwEQcoIa&_nc_oc=AdrIKw93GhNptLmksI9ey3HRA9jcpyRwthutjJDEWQIDAZ44UI1VY8mOvj7Wm6_FY4o&_nc_zt=24&_nc_ht=scontent-ams2-1.xx&_nc_gid=aMwyCutimUwBj3FYuPDSCw&_nc_ss=7b2a8&oh=00_AQBhh63VOgaie4Mmube7K8JbZ5Rum6EdRvvo2bjtXVPzFw&oe=6A5E99CD" alt="NSSR Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">Nordic Safari</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Luxury journeys, authentic experiences, and unforgettable adventures crafted for travelers from the Netherlands. Explore Sri Lanka With Us.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors inline-block">Home</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors inline-block">Packages</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors inline-block">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors inline-block">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Burglaan 39, 7314 BK , Apeldoorn, NL</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+31 649 923 717</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>nordicsafarionsilkroad@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1cnSKaDbwg/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/nordic_safari_on_silk_road__?igsh=MXYyNTFxZWR2N2EwNw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Nordic Safari On Silk Road. All rights reserved.</p>
          <div className="space-x-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

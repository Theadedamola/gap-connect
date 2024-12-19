import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import gapLogo from './gapLogo4.svg'

export const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-brown-light py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={gapLogo} alt="" className="w-16" />
              <span className="ml-2 text-xl font-bold">GAP CONNECT</span>
            </div>
            <p className="text-sm">
              Bridging the gap between challenges and solutions for businesses
              worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@gapconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Business Street, Suite 456</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[70px] md:text-[100px] lg:text-[140px] text-wrap w-full max-w-[1240px]">
            LET'S CONNECT
          </h1>
        </div>
        <div className="mt-8 pt-8 border-t border-charcoal text-center">
          <p className="text-sm">© 2024 GAP CONNECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

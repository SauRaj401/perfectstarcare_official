
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'NDIS Info', href: '/ndis' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const serviceCategories = [
    {
      title: "Daily Living & Personal Care",
      services: [
        { name: "Assist-Personal Activities", code: "0107" },
        { name: "Assist Personal Activities High", code: "0104" },
        { name: "Development-Life Skills", code: "0117" },
      ]
    },
    {
      title: "Living Arrangements", 
      services: [
        { name: "Accommodation/Tenancy", code: "0101" },
        { name: "Daily Tasks/Shared Living", code: "0115" },
        { name: "Specialised Disability Accommodation", code: "0131" },
      ]
    },
    {
      title: "Transport & Access",
      services: [
        { name: "Assist-Travel/Transport", code: "0108" },
      ]
    },
    {
      title: "Health & Nursing",
      services: [
        { name: "Community Nursing Care", code: "0114" },
      ]
    },
    {
      title: "Skills & Independence",
      services: [
        { name: "Assist Access/Maintain Employ", code: "0102" },
        { name: "Assist-Life Stage, Transition", code: "0106" },
      ]
    },
    {
      title: "Social & Community",
      services: [
        { name: "Participate Community", code: "0125" },
        { name: "Innov Community Participation", code: "0116" },
        { name: "Group/Centre Activities", code: "0136" },
      ]
    },
    {
      title: "Household Support",
      services: [
        { name: "Household Tasks", code: "0120" },
      ]
    }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-compassion-600 to-hope-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <a 
              href="mailto:info@perfectstarcare.com.au" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors group"
              aria-label="Email us"
            >
              <div className="p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <Mail className="h-3 w-3" />
              </div>
              <span className="hidden sm:inline font-medium">info@perfectstarcare.com.au</span>
              <span className="sm:hidden font-medium">Email Us</span>
            </a>
            <div className="flex items-center space-x-2 text-white/90">
              <div className="p-1 bg-white/20 rounded-full">
                <Phone className="h-3 w-3" />
              </div>
              <span className="hidden sm:inline font-medium text-sm">NDIS Registered Provider</span>
              <span className="sm:hidden font-medium text-sm">NDIS Certified</span>
            </div>
          </div>
          <a 
            href="tel:0452100305"
            className="inline-flex items-center space-x-2 bg-white/10 text-white border border-white/30 hover:bg-white hover:text-compassion-600 font-semibold transition-all duration-300 px-3 py-1.5 rounded text-sm"
          >
            <Phone className="h-3 w-3" />
            <span>0452100305</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <img 
                src="/perfect-images/7758da9e-8898-4c26-8dca-65ee9982ca71.png" 
                alt="Perfect Star Care Solution logo" 
                className="h-20 w-20 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-compassion-600 to-hope-500 group-hover:from-hope-500 group-hover:to-compassion-600 transition-all duration-300">
                  Perfect Star
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Care Solution
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      isActive(item.href) 
                        ? 'text-compassion-600' 
                        : 'text-gray-700 hover:text-compassion-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-compassion-600 to-hope-500 transition-all duration-300 group-hover:w-full ${
                      isActive(item.href) ? 'w-full' : ''
                    }`}></span>
                  </Link>
                </NavigationMenuItem>
              ))}
              
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-gradient-to-r from-compassion-600 to-hope-500 hover:from-compassion-700 hover:to-hope-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 text-sm font-medium">
                        Our Services
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" side="bottom" sideOffset={8} className="w-[360px] p-2 bg-white shadow-xl rounded-xl z-50">
                      <div className="grid grid-cols-1 gap-2">
                        {serviceCategories.map((category, index) => (
                          <Link
                            key={index}
                            to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            className="block w-full p-3 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-100 hover:border-compassion-200"
                          >
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-compassion-600 transition-colors">
                              {category.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <Link 
                          to="/services"
                          className="inline-flex items-center text-sm font-medium text-compassion-600 hover:text-compassion-700 transition-colors"
                        >
                          View all services →
                        </Link>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open menu" className="hover:bg-gray-100">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-compassion-600 to-hope-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Services Link */}
                  <Link
                    to="/services"
                    className="bg-gradient-to-r from-compassion-600 to-hope-500 text-white shadow-lg text-base font-medium py-3 px-4 rounded-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Services
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      hasDropdown: true,
      subItems: [
        { name: 'Our Story', anchor: '#our-story' },
        { name: 'Professional Experience', anchor: '#professional-experience' },
        { name: 'Achievements', anchor: '#achievements' },
        { name: 'Education & Training', anchor: '#education-training' },
        { name: 'Dance Style & Expertise', anchor: '#dance-expertise' },
        { name: 'Our Mission', anchor: '#our-mission' }
      ]
    },
    { name: 'Performances', path: '/performances' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 200); // 200ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleSubMenuClick = (anchor: string) => {
    // Clear any pending timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    if (location.pathname !== '/about') {
      navigate('/about');
      // Wait longer for navigation to complete
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          // Add offset to account for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        // Add offset to account for fixed header
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsAboutDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 dance-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl dance-text-gradient">
              Tarana Dance Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative flex items-center">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${
                        isActive(item.path)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </Link>
                    
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <div className="py-1">
                          {item.subItems?.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleSubMenuClick(subItem.anchor)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center whitespace-nowrap ${
                      isActive(item.path)
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems?.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleSubMenuClick(subItem.anchor)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

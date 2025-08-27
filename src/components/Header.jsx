import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      submenu: [
        { name: "Our Expertise", path: "/#our-expertise" },
        { name: "Services", path: "/#services" },
        { name: "Metrics", path: "/#metrics" },
        { name: "Featured", path: "/#featured" },
        { name: "Testimonials", path: "/#testimonials" },
        { name: "Our Blog", path: "/#our-blog" },
      ],
    },
    {
      name: "About Us",
      path: "/about",
      submenu: [
        { name: "Mission", path: "/about#mission" },
        { name: "Vision", path: "/about#vision" },
        { name: "Our Story", path: "/about#our-story" },
        { name: "Founder", path: "/about#founder" },
        { name: "Team", path: "/about#team" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "TVG Management", path: "/services/tvg-management" },
        { name: "TVG Stream", path: "/services/tvg-stream" },
        { name: "TVG Books", path: "/services/tvg-books" },
        { name: "TVG Connect", path: "/services/tvg-connect" },
        { name: "TVG Verify", path: "/services/tvg-verify" },
        { name: "TVG Creative", path: "/services/tvg-creative" },
        { name: "TVG Reporting", path: "/services/tvg-reporting" },
        { name: "TVG Command", path: "/services/tvg-command" },
      ],
    },
    {
      name: "Blog",
      path: "/blog",
      submenu: [
        { name: "Trending Blogs", path: "/blog#trending-blogs" },
        { name: "Latest Blogs", path: "/blog#latest-blogs" },
        { name: "Popular Blogs", path: "/blog#popular-blogs" },
      ],
    },
    {
      name: "Contact Us",
      path: "/contact",
      submenu: [
        { name: "Support", path: "/contact/support" },
        { name: "Locations", path: "/contact/locations" },
      ],
    },
  ];

  // Normalize pathnames like "/about/" -> "/about"
  const normalize = (p) => {
    if (!p) return "";
    if (p !== "/" && p.endsWith("/")) return p.slice(0, -1);
    return p;
  };

  // Smooth scroll after route changes that include a hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // slight delay so target exists after route transition
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }
  }, [location]);

   useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;

      const st = window.pageYOffset || document.documentElement.scrollTop;
      header.style.transform =
        st > lastScrollTop && st > 50 ? "translateY(-100%)" : "translateY(0)";
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renders links; if hash is on the current page, intercept and smooth-scroll
  const renderLink = (sub, className = "", closeMenu = true) => {
    const hasHash = sub.path.includes("#");
    if (!hasHash) {
      return (
        <Link
          to={sub.path}
          className={className}
          onClick={() => {
            if (closeMenu) setIsOpen(false);
            setOpenDropdown(null);
          }}
        >
          {sub.name}
        </Link>
      );
    }

    const [pathnamePart, hashPartRaw] = sub.path.split("#");
    const pathname = normalize(pathnamePart || "");
    const hash = hashPartRaw || "";
    const isSamePage =
      normalize(location.pathname) === (pathname || (hash ? "/" : normalize(location.pathname)));

    // If on the same page as the anchor, prevent navigation and smooth scroll
    if (isSamePage) {
      return (
        <a
          href={sub.path}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              // update the URL hash without reloading
              const base = pathname || normalize(location.pathname);
              window.history.pushState(null, "", `${base}#${hash}`);
            }
            if (closeMenu) setIsOpen(false);
            setOpenDropdown(null);
          }}
        >
          {sub.name}
        </a>
      );
    }

    // Different page: let React Router navigate; useEffect will handle scroll
    return (
      <Link
        to={`${pathname || ""}#${hash}`}
        className={className}
        onClick={() => {
          if (closeMenu) setIsOpen(false);
          setOpenDropdown(null);
        }}
      >
        {sub.name}
      </Link>
    );
  };

  return (
    <motion.header
      className="bg-black text-white sticky top-0 z-50"
      id="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Link to="/"><img src="/logo.png" alt="Logo" className="h-14" /></Link>
        </motion.div>

        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          whileTap={{ scale: 0.9, rotate: isOpen ? 90 : 0 }}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </motion.button>

        {/* Desktop Nav */}
        <motion.div
          className="hidden lg:flex items-center justify-between flex-1 gap-8 mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <nav className="flex gap-6 text-lg font-medium mx-auto relative">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link className="font-manrope" to={item.path}>{item.name}</Link>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </div>
                <AnimatePresence>
                  {openDropdown === idx && (
                    <motion.div
                      className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg p-3 w-52"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {item.submenu.map((sub, sidx) =>
                        renderLink(sub, "block px-3 py-2 rounded-md hover:bg-[#48cae49c]", false)
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex gap-3">
            <button
              className="border border-white rounded-full px-5 py-2 text-lg font-manrope hover:bg-white hover:text-black transition"
              onClick={() => window.open("https://www.repagencyworks.com/login.php", "_blank")}
            >
              Resource Portal
            </button>
            <Link
              to="/pay"
              className="border border-white rounded-full px-5 py-2 text-lg font-manrope hover:bg-white hover:text-black transition"
            >
              Pay Invoice
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, idx) => (
              <div key={idx}>
                <button
                  className="flex justify-between w-full py-2 border-b border-gray-700"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {item.name}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === idx && (
                    <motion.div
                      className="pl-4 flex flex-col gap-2 py-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.submenu.map((sub, sidx) =>
                        renderLink(sub, "text-sm py-1 border-b border-gray-700", true)
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <button
                className="border border-white rounded-full px-5 py-2 text-sm text-center hover:bg-white hover:text-black transition"
                onClick={() => window.open("https://www.repagencyworks.com/login.php", "_blank")}
              >
                Resource Portal
              </button>
              <Link
                to="/pay"
                className="border border-white rounded-full px-5 py-2 text-sm text-center hover:bg-white hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Pay Invoice
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

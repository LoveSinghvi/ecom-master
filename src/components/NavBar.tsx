import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, ChevronRight } from "lucide-react";
import { useCart } from "@/pages/CartContext";
import { ThemeToggle } from "@/components/theme-toggler";
import { useAuth } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import { toast } from "sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        to={to}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to generate breadcrumb items based on current path
  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const items = [];

    // Always add Home as first item
    items.push(
      <BreadcrumbItem key="home">
        <BreadcrumbLink asChild>
          <Link to="/">Hom</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    // Build path progressively, but only up to subcategory
    let currentPath = '';
    pathnames.forEach((name, index) => {
      // Skip if we're at the product ID level (4th level or deeper)
      if (index >= 3) return;
      
      currentPath += `/${name}`;
      const isLast = index === Math.min(2, pathnames.length - 1);
      
      // Format the name for display
      const displayName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      if (isLast) {
        items.push(
          <BreadcrumbItem key={name}>
            <BreadcrumbPage>{displayName}</BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else {
        items.push(
          <BreadcrumbItem key={name}>
            <BreadcrumbLink asChild>
              <Link to={currentPath}>{displayName}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      }
    });

    return items;
  };

  const handleLogout = () => {
    const isAdmin = localStorage.getItem("adminToken");
    const isUser = localStorage.getItem("userToken");

    if (isAdmin) {
      localStorage.removeItem("adminToken");
      toast.success("Admin logged out successfully");
    } else if (isUser) {
      localStorage.removeItem("userToken");
      toast.success("User logged out successfully");
    }
    navigate("/");
  };

  return (
    <>
      {/* Marquee */}
      <div className="fixed top-0 left-0 right-0 bg-[#111622] text-white py-1 text-sm sm:text-base z-50 overflow-hidden dark:bg-[#0f52ba]">
        <div className="animate-marquee whitespace-nowrap text-center">
          <pre>
            So many perks await! Membership now LIVE 🎊                                  🎉 Flat 10% OFF on order above $250 or more - Use Code: BEST10                             So many perks await! Membership now LIVE 🎊                                  🎉 Flat 10% OFF on order above $250 or more - Use Code: BEST10
          </pre>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-8 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold pt-1">
              Global Exports
            </Link>
            {/* <Breadcrumb className="text-xs mt-3">
              <BreadcrumbList>
                {getBreadcrumbItems().map((item, index, array) => (
                  <React.Fragment key={item.key}>
                    {item}
                    {index < array.length - 1 && (
                      <BreadcrumbItem>
                        <span className="mx-2 text-muted-foreground">/</span>
                      </BreadcrumbItem>
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>

          {/* Mobile Menu Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <Link to="/" className="group inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-background/60 hover:backdrop-blur">Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-background/60 hover:backdrop-blur">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 sm:w-[400px] sm:grid-cols-2 lg:w-[500px]">
                      <ListItem to="/all-products" title="All Products">Browse our complete collection</ListItem>
                      <ListItem to="/products/textiles" title="Textiles">Exquisite fabrics and traditional weaves</ListItem>
                      <ListItem to="/products/jewellery" title="Jewellery">Stunning handcrafted designs</ListItem>
                      <ListItem to="/products/accessories" title="Accessories">Elegant complementary pieces</ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="group inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-background/60 hover:backdrop-blur">About</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className="group inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-background/60 hover:backdrop-blur">Blog</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="group inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-background/60 hover:backdrop-blur">Contact</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/faq" className="group inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-background/60 hover:backdrop-blur">FAQ</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Icons + ThemeToggle + Profile */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/all-products">
                <Search className="h-5 w-5 sm:h-[1.2rem] sm:w-[1.2rem]" />
              </Link>
            </Button>

            <ProfileDropdown />

            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 sm:h-[1.2rem] sm:w-[1.2rem]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <nav className="px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/products" className="text-sm font-medium px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/about" className="text-sm font-medium px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/blog" className="text-sm font-medium px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-sm font-medium px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/faq" className="text-sm font-medium px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div style={{ paddingTop: "5.5rem" }} />
    </>
  );
};

export default Navbar;

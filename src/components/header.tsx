import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const navLinks = [
  { name: "Politics", href: "#" },
  { name: "Opinions", href: "#" },
  { name: "Style", href: "#" },
  { name: "Investigations", href: "#" },
  { name: "Climate", href: "#" },
  { name: "Well-Being", href: "#" },
  { name: "Business", href: "#" },
  { name: "Tech", href: "#" },
  { name: "World", href: "#" },
  { name: "Sports", href: "#" },
];

export function Header() {
  return (
    <header className="bg-background text-foreground sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Header */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full p-4">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-2xl font-bold font-headline text-primary">
                      The Studio Post
                    </span>
                  </div>
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          <div className="text-center">
            <Link href="/" aria-label="Home page">
              <h1 className="text-3xl md:text-4xl font-black font-headline text-foreground tracking-tighter">
                The Studio Post
              </h1>
              <p className="text-xs font-sans">Democracy Dies in Darkness</p>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5">Subscribe</Button>
            <Button variant="ghost" size="sm" className="font-bold">Sign In</Button>
          </div>
        </div>
      </div>
      
      <Separator />

      {/* Bottom Nav */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block max-w-7xl">
        <nav className="flex items-center justify-center space-x-6 h-12 overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-bold text-sm text-foreground hover:text-primary transition-colors flex-shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <Separator/>
    </header>
  );
}

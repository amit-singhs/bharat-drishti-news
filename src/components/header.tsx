import { Newspaper, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { name: "होम", href: "#" },
  { name: "राष्ट्रीय", href: "#" },
  { name: "अंतरराष्ट्रीय", href: "#" },
  { name: "व्यापार", href: "#" },
  { name: "खेल", href: "#" },
  { name: "प्रौद्योगिकी", href: "#" },
  { name: "मनोरंजन", href: "#" },
];

export function Header() {
  return (
    <header className="bg-background text-foreground sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="lg:hidden mr-2">
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
                        <Newspaper className="h-7 w-7 text-primary" />
                        <span className="text-2xl font-bold font-headline text-primary">
                            धर्म राज
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
            </div>
            <a href="#" aria-label="Home page" className="flex items-center space-x-2">
              <Newspaper className="h-7 w-7 text-primary hidden md:block" />
              <h1 className="text-2xl md:text-3xl font-extrabold font-headline text-primary tracking-tight">
                धर्म राज
              </h1>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="default" size="sm">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator />
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
           <nav className="flex items-center space-x-6 h-12 overflow-x-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
       </div>
    </header>
  );
}

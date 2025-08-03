import { Newspaper, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubscriptionForm } from "@/components/subscription-form";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "होम", href: "#" },
  { name: "राष्ट्रीय", href: "#" },
  { name: "अंतरराष्ट्रीय", href: "#" },
  { name: "व्यापार", href: "#" },
  { name: "खेल", href: "#" },
];

export function Header() {
  return (
    <header className="bg-card text-card-foreground shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Home page">
              <Newspaper className="h-8 w-8 text-primary" />
            </a>
            <a href="#" className="no-underline">
              <h1 className="text-3xl font-bold font-headline text-primary">
                धर्म राज
              </h1>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-headline font-semibold text-lg hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <SubscriptionForm />
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full p-4">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <Newspaper className="h-8 w-8 text-primary" />
                      <h1 className="text-2xl font-bold font-headline text-primary">
                        धर्म राज
                      </h1>
                    </div>
                  </div>
                  <nav className="flex flex-col space-y-4 mb-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="font-headline font-semibold text-xl hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4">
                    <SubscriptionForm />
                    <Button variant="outline" className="w-full">
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

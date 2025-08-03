import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { name: "राजनीति", href: "#" },
  { name: "विचार", href: "#" },
  { name: "शैली", href: "#" },
  { name: "जांच", href: "#" },
  { name: "जलवायु", href: "#" },
  { name: "कल्याण", href: "#" },
  { name: "व्यापार", href: "#" },
  { name: "तकनीक", href: "#" },
  { name: "विश्व", href: "#" },
  { name: "खेल", href: "#" },
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
                  <span className="sr-only">मेनू खोलें</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetTitle>
                  <VisuallyHidden>Main Menu</VisuallyHidden>
                </SheetTitle>
                <SheetDescription>
                  <VisuallyHidden>वेबसाइट के लिए नेविगेशन लिंक।</VisuallyHidden>
                </SheetDescription>
                <div className="flex flex-col h-full p-4">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-2xl font-bold font-headline text-primary">
                      भारत दृष्टि
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
              <span className="sr-only">खोज</span>
            </Button>
          </div>

          <div className="text-center">
            <Link href="/" aria-label="मुख पृष्ठ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-headline text-foreground tracking-tighter">
                भारत दृष्टि
              </h1>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">सदस्यता लें</Button>
            <Button variant="ghost" size="sm" className="font-bold">साइन इन करें</Button>
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

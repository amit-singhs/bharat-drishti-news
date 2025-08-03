import { Newspaper } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Newspaper className="h-7 w-7" />
            <span className="text-2xl font-bold font-headline">
              धर्म राज
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
            <Button variant="link" className="text-primary-foreground text-sm hover:underline" asChild>
                <a href="#">हमारे बारे में</a>
            </Button>
            <Button variant="link" className="text-primary-foreground text-sm hover:underline" asChild>
                <a href="#">संपर्क करें</a>
            </Button>
            <Button variant="link" className="text-primary-foreground text-sm hover:underline" asChild>
                <a href="#">गोपनीयता नीति</a>
            </Button>
             <Button variant="link" className="text-primary-foreground text-sm hover:underline" asChild>
                <a href="#">सेवा की शर्तें</a>
            </Button>
          </nav>
          <div className="text-sm text-primary-foreground/80 text-center md:text-right">
            © {new Date().getFullYear()} धर्म राज. सर्वाधिकार सुरक्षित.
          </div>
        </div>
      </div>
    </footer>
  );
}

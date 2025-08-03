import { Newspaper } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Newspaper className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold font-headline text-primary">
              धर्म राज
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              हमारे बारे में
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              संपर्क करें
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              गोपनीयता नीति
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              सेवा की शर्तें
            </a>
          </nav>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} धर्म राज. सर्वाधिकार सुरक्षित.
          </div>
        </div>
      </div>
    </footer>
  );
}

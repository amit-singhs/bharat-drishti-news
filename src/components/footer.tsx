import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const footerSections = [
    {
        title: 'समाचार',
        links: ['घर', 'राजनीति', 'विश्व', 'व्यापार', 'तकनीक', 'विज्ञान']
    },
    {
        title: 'विचार',
        links: ['संपादकीय', 'अतिथि लेखक', 'पत्र']
    },
    {
        title: 'जीवनशैली',
        links: ['स्वास्थ्य', 'भोजन', 'यात्रा', 'कला और संस्कृति']
    },
    {
        title: 'खेल',
        links: ['क्रिकेट', 'फुटबॉल', 'टेनिस', 'अन्य खेल']
    }
];

const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
];

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {footerSections.map(section => (
                        <div key={section.title}>
                            <h3 className="font-bold font-headline text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="col-span-2 lg:col-span-2">
                        <h3 className="font-bold font-headline text-lg mb-4">न्यूज़लेटर के लिए साइन अप करें</h3>
                        <p className="text-muted-foreground mb-4">नवीनतम समाचार और अपडेट सीधे अपने इनबॉक्स में प्राप्त करें।</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <Input type="email" placeholder="आपका ईमेल" className="flex-grow" />
                            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">सदस्यता लें</Button>
                        </form>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-headline font-black">भारत दृष्टि</h2>
                    </div>
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        {socialLinks.map(link => (
                             <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} भारत दृष्टि। सर्वाधिकार सुरक्षित।</p>
                        <Link href="#" className="hover:underline">गोपनीयता नीति</Link> | <Link href="#" className="hover:underline">सेवा की शर्तें</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

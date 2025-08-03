import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleCard, type Article } from "@/components/article-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const dummyArticles: Article[] = [
  {
    id: "1",
    category: "मुख्य समाचार",
    headline: "ऐतिहासिक क्षण: भारत ने अंतरिक्ष में नया कीर्तिमान स्थापित किया",
    summary:
      "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) ने आज एक और बड़ी सफलता हासिल की, जब उसके नवीनतम संचार उपग्रह को सफलतापूर्वक कक्षा में स्थापित किया गया। यह मिशन देश की अंतरिक्ष क्षमताओं में एक महत्वपूर्ण मील का पत्थर है।",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "launching rocket",
    author: "विज्ञान संवाददाता",
    date: "24 जुलाई, 2024",
  },
  {
    id: "2",
    category: "अर्थव्यवस्था",
    headline: "शेयर बाजार में रिकॉर्ड तेजी, निवेशकों में उत्साह का माहौल",
    summary:
      "सकारात्मक वैश्विक संकेतों और मजबूत घरेलू आर्थिक आंकड़ों के दम पर आज भारतीय शेयर बाजार ने नई ऊंचाइयों को छू लिया। सेंसेक्स और निफ्टी दोनों प्रमुख सूचकांकों में जोरदार उछाल देखा गया।",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "trading floor",
    author: "व्यापार डेस्क",
    date: "24 जुलाई, 2024",
  },
  {
    id: "3",
    category: "खेल",
    headline: "क्रिकेट विश्व कप: भारत ने फाइनल में बनाई जगह",
    summary:
      "एक रोमांचक सेमीफाइनल मुकाबले में शानदार प्रदर्शन करते हुए भारतीय क्रिकेट टीम ने विश्व कप के फाइनल में प्रवेश कर लिया है।",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cricket match",
    author: "खेल डेस्क",
    date: "23 जुलाई, 2024",
  },
  {
    id: "4",
    category: "प्रौद्योगिकी",
    headline: "नई 5G तकनीक का अनावरण, बदलेगी इंटरनेट की दुनिया",
    summary:
      "आज एक प्रमुख प्रौद्योगिकी कंपनी ने अपनी अगली पीढ़ी की 5G तकनीक का प्रदर्शन किया, जिससे डेटा स्पीड में अभूतपूर्व वृद्धि का वादा किया गया है।",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "futuristic city",
    author: "टेक गुरु",
    date: "23 जुलाई, 2024",
  },
  {
    id: "5",
    category: "विश्व",
    headline: "अंतर्राष्ट्रीय शांति शिखर सम्मेलन आज से शुरू",
    summary: "दुनिया भर के नेता वैश्विक शांति और सहयोग पर चर्चा करने के लिए आज एक महत्वपूर्ण शिखर सम्मेलन के लिए एकत्रित हुए।",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "world leaders",
    author: "अंतर्राष्ट्रीय डेस्क",
    date: "24 जुलाई, 2024",
  },
   {
    id: "6",
    category: "स्वास्थ्य",
    headline: "मानसून में स्वास्थ्य: विशेषज्ञों द्वारा जारी की गई नई गाइडलाइन्स",
    summary:
      "स्वास्थ्य मंत्रालय ने मानसून के मौसम में बीमारियों से बचाव के लिए नए दिशा-निर्देश जारी किए हैं, जिसमें स्वच्छता और खान-पान पर विशेष ध्यान देने की सलाह दी गई है।",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "doctor consultation",
    author: "स्वास्थ्य रिपोर्टर",
    date: "22 जुलाई, 2024",
  },
];

export default function Home() {
  const mainArticle = dummyArticles[0];
  const topStories = dummyArticles.slice(1, 4);
  const secondaryStories = dummyArticles.slice(4);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <section aria-labelledby="main-article-title">
              <Card className="border-0 shadow-none rounded-none">
                <CardHeader className="p-0">
                   <a href="#" className="block mb-4 overflow-hidden">
                    <Image
                      src={mainArticle.imageUrl}
                      alt={mainArticle.headline}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      data-ai-hint={mainArticle.imageHint}
                      priority
                    />
                  </a>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{mainArticle.category}</p>
                  <CardTitle
                    id="main-article-title"
                    className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold leading-tight mt-2"
                  >
                    <a href="#" className="hover:underline">{mainArticle.headline}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-lg text-muted-foreground">
                    {mainArticle.summary}
                  </p>
                </CardContent>
                 <CardFooter className="p-0 mt-3 text-xs text-muted-foreground">
                  <span>By {mainArticle.author}</span>
                  <span className="mx-2">•</span>
                  <span>{mainArticle.date}</span>
                </CardFooter>
              </Card>
            </section>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-2xl font-headline font-bold mb-4 pb-2 border-b-2 border-primary">
                प्रमुख कहानियाँ
              </h2>
              <div className="space-y-6">
                {topStories.map((article) => (
                   <div key={article.id} className="grid grid-cols-12 gap-4 group">
                     <div className="col-span-8">
                       <p className="text-xs font-semibold text-primary uppercase tracking-wider">{article.category}</p>
                       <h3 className="font-headline font-bold text-lg leading-tight mt-1 group-hover:underline">
                         <a href="#">{article.headline}</a>
                       </h3>
                       <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
                     </div>
                     <div className="col-span-4">
                       <a href="#" className="block overflow-hidden rounded">
                         <Image
                           src={article.imageUrl}
                           alt={article.headline}
                           width={150}
                           height={100}
                           className="w-full h-auto object-cover"
                           data-ai-hint={article.imageHint}
                         />
                       </a>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <Separator className="my-8 md:my-12"/>

        <section aria-labelledby="secondary-news-title">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {secondaryStories.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

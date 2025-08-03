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
import { Badge } from "@/components/ui/badge";

const dummyArticles: Article[] = [
  {
    id: "1",
    category: "मुख्य समाचार",
    headline: "ऐतिहासिक क्षण: भारत ने अंतरिक्ष में नया कीर्तिमान स्थापित किया",
    summary:
      "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) ने आज एक और बड़ी सफलता हासिल की, जब उसके नवीनतम संचार उपग्रह को सफलतापूर्वक कक्षा में स्थापित किया गया।",
    imageUrl: "https://placehold.co/1200x600",
    imageHint: "space rocket",
    author: "विज्ञान संवाददाता",
    date: "24 जुलाई, 2024",
  },
  {
    id: "2",
    category: "अर्थव्यवस्था",
    headline: "शेयर बाजार में रिकॉर्ड तेजी, निवेशकों में उत्साह का माहौल",
    summary:
      "सकारात्मक वैश्विक संकेतों और मजबूत घरेलू आर्थिक आंकड़ों के दम पर आज भारतीय शेयर बाजार ने नई ऊंचाइयों को छू लिया।",
    imageUrl: "https://placehold.co/400x300",
    imageHint: "stock market",
    author: "व्यापार डेस्क",
    date: "24 जुलाई, 2024",
  },
  {
    id: "3",
    category: "खेल",
    headline: "क्रिकेट विश्व कप: भारत ने फाइनल में बनाई जगह",
    summary:
      "एक रोमांचक सेमीफाइनल मुकाबले में शानदार प्रदर्शन करते हुए भारतीय क्रिकेट टीम ने विश्व कप के फाइनल में प्रवेश कर लिया है।",
    imageUrl: "https://placehold.co/400x300",
    imageHint: "cricket stadium",
    author: "खेल डेस्क",
    date: "23 जुलाई, 2024",
  },
  {
    id: "4",
    category: "प्रौद्योगिकी",
    headline: "नई 5G तकनीक का अनावरण, बदलेगी इंटरनेट की दुनिया",
    summary:
      "आज एक प्रमुख प्रौद्योगिकी कंपनी ने अपनी अगली पीढ़ी की 5G तकनीक का प्रदर्शन किया, जिससे डेटा स्पीड में अभूतपूर्व वृद्धि का वादा किया गया है।",
    imageUrl: "https://placehold.co/400x300",
    imageHint: "5g tower",
    author: "टेक गुरु",
    date: "23 जुलाई, 2024",
  },
  {
    id: "5",
    category: "मनोरंजन",
    headline: "आगामी बॉलीवुड फिल्म का ट्रेलर रिलीज, प्रशंसकों में उत्सुकता",
    summary:
      "बहुप्रतीक्षित बॉलीवुड फिल्म का ट्रेलर आज जारी किया गया, जिसने सोशल मीडिया पर धूम मचा दी है और प्रशंसक इसकी रिलीज का बेसब्री से इंतजार कर रहे हैं।",
    imageUrl: "https://placehold.co/400x300",
    imageHint: "movie theater",
    author: "फिल्म समीक्षक",
    date: "22 जुलाई, 2024",
  },
  {
    id: "6",
    category: "स्वास्थ्य",
    headline: "मानसून में स्वास्थ्य: विशेषज्ञों द्वारा जारी की गई नई गाइडलाइन्स",
    summary:
      "स्वास्थ्य मंत्रालय ने मानसून के मौसम में बीमारियों से बचाव के लिए नए दिशा-निर्देश जारी किए हैं, जिसमें स्वच्छता और खान-पान पर विशेष ध्यान देने की सलाह दी गई है।",
    imageUrl: "https://placehold.co/400x300",
    imageHint: "healthy food",
    author: "स्वास्थ्य रिपोर्टर",
    date: "22 जुलाई, 2024",
  },
];

export default function Home() {
  const featuredArticle = dummyArticles[0];
  const otherArticles = dummyArticles.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section aria-labelledby="featured-article-title" className="mb-12">
          <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/10">
            <div className="md:flex">
              <div className="md:w-1/2 relative min-h-[250px] md:min-h-full">
                <Image
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.headline}
                  fill
                  className="w-full h-full object-cover"
                  data-ai-hint={featuredArticle.imageHint}
                  priority
                />
              </div>
              <div className="md:w-1/2 flex flex-col">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {featuredArticle.category}
                  </Badge>
                  <CardTitle
                    id="featured-article-title"
                    className="text-3xl md:text-4xl font-headline font-bold leading-tight"
                  >
                    <a href="#" className="hover:text-primary transition-colors">{featuredArticle.headline}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-lg text-muted-foreground">
                    {featuredArticle.summary}
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <span>{featuredArticle.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.date}</span>
                </CardFooter>
              </div>
            </div>
          </Card>
        </section>

        <section aria-labelledby="other-news-title">
          <h2
            id="other-news-title"
            className="text-3xl font-headline font-bold mb-8 pb-2 border-b-4 border-primary"
          >
            अन्य समाचार
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

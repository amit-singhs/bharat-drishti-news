"use client";

import { useParams } from 'next/navigation';
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { dummyArticles, type Article } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ArticlePage() {
  const params = useParams();
  const id = params.id as string;
  const article = dummyArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const relatedArticles = dummyArticles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 4);

  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8">
            <article>
              <header>
                <p className="text-lg font-semibold text-primary mb-2">{article.category}</p>
                <h1 className="text-4xl md:text-5xl font-headline font-black leading-tight mb-4">
                  {article.headline}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  {article.summary}
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar>
                    <AvatarImage src={article.authorImage} alt={article.author} />
                    <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{article.author}</p>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
                  </div>
                </div>
              </header>

              <Image
                src={article.imageUrl}
                alt={article.headline}
                width={1200}
                height={700}
                className="w-full h-auto object-cover my-8"
                priority
              />

              <div className="prose prose-lg max-w-none mx-auto text-foreground prose-p:font-body prose-p:text-lg prose-p:leading-relaxed prose-headings:font-headline">
                <p>
                  एक दूरस्थ गाँव में, पहाड़ों के बीच बसा, आरव नाम का एक युवा लड़का रहता था। वह अपनी जिज्ञासा और रोमांच की भावना के लिए जाना जाता था। एक दिन, गाँव के बुजुर्गों से प्राचीन कथाएँ सुनते हुए, उसे एक छिपे हुए झरने के बारे में पता चला जिसके बारे में कहा जाता है कि उसमें जादुई शक्तियाँ हैं।
                </p>
                <p>
                  इस खोज से उत्साहित होकर, आरव ने झरने को खोजने के लिए यात्रा पर निकलने का फैसला किया। उसने एक छोटा सा बैग भोजन, पानी और एक पुराने नक्शे के साथ पैक किया जो उसे अपने दादा से विरासत में मिला था। नक्शा फीका और फटा हुआ था, लेकिन इसमें प्राचीन प्रतीकों के साथ एक रहस्यमय निशान दिखाया गया था जो माना जाता था कि झरने की ओर ले जाता है।
                </p>
                <p>
                  जैसे ही आरव घने जंगल में गया, उसे विभिन्न चुनौतियों का सामना करना पड़ा। उसने ऊंची चट्टानों पर चढ़ाई की, तेज बहने वाली नदियों को पार किया और अँधेरी, डरावनी गुफाओं से गुज़रा। रास्ते में, उसकी दोस्ती जंगल के कई जीवों से हुई - एक बुद्धिमान बूढ़ा उल्लू, एक चंचल गिलहरी और एक कोमल हिरण। उन्होंने उसे खतरनाक रास्तों पर मार्गदर्शन किया और उसे प्रेरित रखा।
                </p>
                 <p>
                  कई दिनों की यात्रा के बाद, आरव अंत में एक ऐसी समाशोधन पर पहुँचा जहाँ उसने पानी की तेज़ आवाज़ सुनी। उसने ध्वनि का पीछा किया और लम्बे, काई से ढके पेड़ों के पीछे छिपे हुए झरने को पाया। पानी एक ऊँची चट्टान से एक क्रिस्टल-स्पष्ट पूल में गिर रहा था, जो एक अलौकिक चमक से चमक रहा था। जैसे ही उसने पूल से पानी पिया, उसे ऊर्जा और जीवन शक्ति का एक उछाल महसूस हुआ जैसा उसने पहले कभी अनुभव नहीं किया था। उसे एहसास हुआ कि झरने का जादू उसकी चिकित्सा शक्तियों में नहीं था, बल्कि यात्रा में ही था - उसने जो सबक सीखे, उसने जो दोस्त बनाए और उसने जो ताकत अपने भीतर खोजी।
                </p>
              </div>
            </article>

            <Separator className="my-12" />
            
            <section>
              <h2 className="text-2xl font-bold font-headline mb-6">संबंधित कहानियाँ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map(related => (
                  <div key={related.id} className="group">
                    <Link href={`/article/${related.id}`}>
                      <Image 
                        src={related.imageUrl}
                        alt={related.headline}
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover"
                      />
                      <h3 className="text-xl font-headline font-bold mt-2 group-hover:underline">{related.headline}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{related.summary}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

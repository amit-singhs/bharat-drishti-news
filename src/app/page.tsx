import Image from "next/image";
import Link from 'next/link';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { dummyArticles, type Article } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ArticleCardSmall({ article }: { article: Article }) {
  return (
    <div className="group">
       <Link href={`/article/${article.id}`}>
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.headline}
            width={400}
            height={250}
            className="w-full h-auto object-cover"
            data-ai-hint={article.imageHint}
          />
        )}
        <h3 className="font-headline text-lg font-bold leading-tight group-hover:underline mt-2">
            {article.headline}
        </h3>
      </Link>
      <p className="text-sm text-muted-foreground mt-1">{article.summary}</p>
    </div>
  )
}

function OpinionArticle({ article }: { article: Article }) {
  return (
    <div className="group flex items-start gap-4">
      <div className="flex-grow">
        <p className="text-sm font-bold text-primary">{article.category}</p>
        <Link href={`/article/${article.id}`} className="font-headline text-lg leading-tight group-hover:underline">
          {article.headline}
        </Link>
      </div>
      {article.authorImage && (
         <Image src={article.authorImage} alt={article.author} width={40} height={40} className="rounded-full flex-shrink-0"/>
      )}
    </div>
  );
}


export default function Home() {
  const mainArticle = dummyArticles[0];
  const topStoriesLeft = dummyArticles.slice(1, 3);
  const featuredArticle = dummyArticles[3];
  const opinionArticles = dummyArticles.slice(4, 10);
  
  const fromThePostSection = dummyArticles.slice(10, 14);
  const opinionsSection = dummyArticles.slice(14, 18);
  const mostReadSection = dummyArticles.slice(18, 23);
  const moreStories = dummyArticles.slice(23);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
        <div className="grid grid-cols-12 gap-x-8">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-3 space-y-6">
            {topStoriesLeft.map((article) => (
              <ArticleCardSmall key={article.id} article={article} />
            ))}
          </div>

          {/* Center Column */}
          <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
            <Link href={`/article/${featuredArticle.id}`} className="block group">
              <Image
                src={featuredArticle.imageUrl}
                alt={featuredArticle.headline}
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                data-ai-hint={featuredArticle.imageHint}
                priority
              />
              <p className="text-xs text-muted-foreground mt-1">{featuredArticle.category}</p>
              <h2 className="text-3xl font-headline font-black leading-tight mt-2 group-hover:underline">
                {featuredArticle.headline}
              </h2>
            </Link>
          </div>
          
          {/* Right Column (Opinions) */}
          <aside className="col-span-12 md:col-span-3 mt-6 md:mt-0">
             <h2 className="text-lg font-bold font-sans uppercase tracking-wider mb-4">
              <Link href="#" className="hover:underline flex items-center">
                विचार <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </h2>
             <div className="space-y-6">
              {opinionArticles.map((article) => (
                <OpinionArticle key={article.id} article={article} />
              ))}
            </div>
          </aside>
        </div>
        
        <Separator className="my-8"/>

        {/* From The Post Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold font-headline mb-4">पोस्ट से</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fromThePostSection.map((article) => (
              <div key={article.id} className="group">
                <Link href={`/article/${article.id}`}>
                  <Image
                    src={article.imageUrl}
                    alt={article.headline}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                    data-ai-hint={article.imageHint}
                  />
                  <p className="text-sm font-bold mt-2 text-primary">{article.category}</p>
                  <h3 className="text-xl font-headline font-bold mt-1 group-hover:underline">{article.headline}</h3>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />
        
        {/* Opinions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold font-headline mb-4">राय</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opinionsSection.map((article) => (
              <div key={article.id} className="group flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <Image src={article.authorImage!} alt={article.author} width={40} height={40} className="rounded-full" />
                  <p className="font-bold text-sm">{article.author}</p>
                </div>
                <Link href={`/article/${article.id}`}>
                  <h3 className="text-lg font-headline font-bold group-hover:underline">{article.headline}</h3>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />
        
        {/* Most Read Section */}
        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">सबसे ज़्यादा पढ़ा गया</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {moreStories.slice(0, 4).map((article) => (
                        <div key={article.id} className="group">
                           <Link href={`/article/${article.id}`} className="block">
                            <Image
                              src={article.imageUrl}
                              alt={article.headline}
                              width={400}
                              height={250}
                              className="w-full h-auto object-cover"
                              data-ai-hint={article.imageHint}
                            />
                            </Link>
                            <p className="text-sm font-bold mt-2 text-primary">{article.category}</p>
                            <Link href={`/article/${article.id}`} className="font-headline text-xl font-bold leading-tight mt-1 group-hover:underline">
                               {article.headline}
                            </Link>
                             <p className="text-sm text-muted-foreground mt-1">{article.summary}</p>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">{article.author}</p>
                        </div>
                      ))}
                </div>
            </div>
            <aside>
                <Card>
                    <CardContent className="p-4">
                        <h3 className="font-bold font-headline text-lg mb-3">शीर्ष 5</h3>
                        <ol className="list-decimal list-inside space-y-3">
                            {mostReadSection.map((article) => (
                                <li key={article.id} className="font-headline text-base hover:underline">
                                    <Link href={`/article/${article.id}`}>{article.headline}</Link>
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>
            </aside>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Link from 'next/link';
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { dummyArticles, type Article } from "@/lib/data";

function ArticleCardSmall({ article }: { article: Article }) {
  return (
    <div className="group">
      <Link href={`/article/${article.id}`} className="font-headline text-lg font-bold leading-tight group-hover:underline">
          {article.headline}
      </Link>
      <p className="text-sm text-muted-foreground mt-1">{article.summary}</p>
      <p className="text-xs text-muted-foreground mt-2 font-medium">{article.author}</p>
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
  const secondaryStories = dummyArticles.slice(10);

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
              <Link href="#" className="hover:underline">Opinions &rarr;</Link>
            </h2>
             <div className="space-y-6">
              {opinionArticles.map((article) => (
                <OpinionArticle key={article.id} article={article} />
              ))}
            </div>
          </aside>
        </div>
        
        <Separator className="my-8"/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryStories.map((article) => (
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
                  <p className="text-xs text-muted-foreground mt-2 font-medium">{article.author}</p>
              </div>
            ))}
        </div>

      </main>
    </div>
  );
}

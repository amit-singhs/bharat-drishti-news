"use client";

import { useParams } from 'next/navigation';
import Image from "next/image";
import { Header } from "@/components/header";
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

              <div className="prose prose-lg max-w-none mx-auto text-foreground prose-p:text-lg prose-p:leading-relaxed prose-headings:font-headline">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                </p>
                <p>
                  Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. 
                </p>
                 <p>
                  Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.
                </p>
              </div>
            </article>

            <Separator className="my-12" />
            
            <section>
              <h2 className="text-2xl font-bold font-headline mb-6">Related stories</h2>
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
    </div>
  );
}

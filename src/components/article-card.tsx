import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Article = {
  id: string;
  category: string;
  headline: string;
  summary: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  date: string;
};

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="h-full group">
      <Card className="flex flex-col h-full border-0 shadow-none rounded-none">
        <a href="#" className="block mb-4 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.headline}
            width={600}
            height={400}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            data-ai-hint={article.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
        <CardHeader className="p-0">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{article.category}</p>
          <CardTitle className="font-headline text-2xl font-bold leading-tight mt-1 group-hover:underline">
             <a href="#">{article.headline}</a>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 mt-2 flex-grow">
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {article.summary}
          </p>
        </CardContent>
        <CardFooter className="p-0 mt-3 text-xs text-muted-foreground">
          <span>By {article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </CardFooter>
      </Card>
    </article>
  );
}

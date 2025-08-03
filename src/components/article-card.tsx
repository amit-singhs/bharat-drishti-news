import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <article className="h-full">
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full aspect-video">
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            className="object-cover"
            data-ai-hint={article.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <Badge variant="outline" className="w-fit mb-2">
            {article.category}
          </Badge>
          <CardTitle className="font-headline text-xl font-bold leading-tight">
             <a href="#" className="hover:text-primary transition-colors">{article.headline}</a>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">
            {article.summary}
          </p>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground mt-auto pt-4">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </CardFooter>
      </Card>
    </article>
  );
}

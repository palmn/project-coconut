import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export function NewsCard({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      className="bg-card border border-border rounded-lg overflow-hidden group cursor-pointer transition-shadow"
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        )}
        {!article.image && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#003566] to-[#d4af37] opacity-20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#003566] text-white rounded-full text-sm uppercase tracking-wide shadow-lg">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm opacity-60 mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="mb-3 group-hover:text-[#d4af37] transition-colors relative">
          {article.title}
          <div className="absolute -left-2 top-0 w-1 h-0 bg-gradient-to-b from-[#d4af37] to-[#c9a227] group-hover:h-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
        </h3>

        <p className="text-sm opacity-60 mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 text-[#d4af37] text-sm group-hover:gap-3 transition-all">
          <span>Läs mer</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
}

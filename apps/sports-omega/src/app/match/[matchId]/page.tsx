import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getMatchById, matchesData } from "@/data/matches";
import { getHeadToHead } from "@/data/headToHead";
import { Logo } from "@/components/Logo";
import { MatchContent } from "./MatchContent";

export async function generateStaticParams() {
  return matchesData.map((match) => ({
    matchId: match.id,
  }));
}

export default async function MatchDetailPage({
  params,
}: {
  params: Promise<{ matchId: string }>;
}) {
  const { matchId } = await params;
  const match = getMatchById(matchId);

  if (!match) {
    notFound();
  }

  const headToHead = getHeadToHead(matchId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" showText={true} />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Tillbaka</span>
            </Link>
          </div>
        </div>
      </header>

      <MatchContent match={match} headToHead={headToHead} />
    </div>
  );
}

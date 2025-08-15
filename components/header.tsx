"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Author", href: "/author" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <Card className="border-b rounded-none shadow-sm">
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-primary">
              Your App
            </Link>
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href="/about">About</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/author">Author</Link>
            </Button>
          </div>
        </nav>
      </header>
    </Card>
  );
}

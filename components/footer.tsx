import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <Card className="border-t rounded-none mt-auto">
      <CardContent className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">Your App</h3>
            <p className="text-sm text-muted-foreground">
              Building amazing experiences with Next.js and modern web
              technologies.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/author"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Author
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Your App. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

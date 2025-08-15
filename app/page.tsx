import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 mb-16">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            Welcome to Your App
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build Amazing
            <span className="text-primary"> Experiences</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern Next.js application built with the latest technologies
            including Next.js 15, Tailwind CSS 4, and shadcn/ui components.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 Next.js 15
              </CardTitle>
              <CardDescription>
                The latest version of Next.js with improved performance and new
                features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built with App Router, Server Components, and the latest React
                features
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Tailwind CSS 4
              </CardTitle>
              <CardDescription>
                Modern utility-first CSS framework for rapid UI development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beautiful design system with dark mode support and custom themes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📦 shadcn/ui
              </CardTitle>
              <CardDescription>
                Beautiful and accessible React components built with Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fully customizable components that you can copy and paste into
                your apps
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card className="border-2 border-dashed">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Explore our documentation and start building your next project
              today.
            </p>
            <Button size="lg">View Documentation</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saigirish.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sai Girish Reddy Vadlathala | AI Engineer Portfolio",
    template: "%s | Sai Girish Reddy Vadlathala"
  },
  description:
    "AI Engineer and Software Engineer specializing in RAG systems, MLOps workflows, .NET backend platforms, cloud deployments, OCR automation, and production AI systems.",
  keywords: [
    "Sai Girish Reddy Vadlathala",
    "AI Engineer",
    "MLOps Engineer",
    "RAG pipelines",
    ".NET backend",
    "Azure DevOps",
    "AWS",
    "Angular",
    "LangChain",
    "MLflow",
    "OCR"
  ],
  authors: [{ name: "Sai Girish Reddy Vadlathala" }],
  creator: "Sai Girish Reddy Vadlathala",
  openGraph: {
    title: "Sai Girish Reddy Vadlathala | AI Systems, RAG, MLOps",
    description:
      "Production AI systems portfolio covering RAG pipelines, OCR automation, cloud-native .NET services, and CI/CD delivery.",
    url: siteUrl,
    siteName: "Sai Girish Portfolio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Sai Girish Reddy Vadlathala AI Engineer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Girish Reddy Vadlathala | AI Engineer Portfolio",
    description: "RAG, MLOps, OCR automation, .NET backend systems, AWS, Azure, and production AI workflows.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  alternates: {
    canonical: siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#06070b",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}

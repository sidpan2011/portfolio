import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Script from "next/script";
import { OpenPanelComponent } from "@openpanel/nextjs";

export const metadata = {
  title: "Sidhanth P.",
  description: "I’m an engineer-founder from Gurugram building offline-first AI and verifiable media, and I write about what I’m learning along the way.",
  openGraph: {
    type: "website",
    url: "https://www.sidhanthp.me",
    siteName: "Sidhanth P.",
    title: "Sidhanth P.",
    description: "I’m an engineer-founder from Gurugram building offline-first AI and verifiable media, and I write about what I’m learning along the way.",
    images: [
      {
        url: "https://www.sidhanthp.me/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Sidhanth P. - ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidhanth P.",
    description: "I’m an engineer-founder from Gurugram building offline-first AI and verifiable media, and I write about what I’m learning along the way.",
    images: ["https://www.sidhanthp.me/assets/og.png"],
    creator: "@sidhanthpande",
    site: "@sidhanthpande",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TC7ZXCL25X`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TC7ZXCL25X');
          `}
        </Script>
      </head>
      <body
      >
        <OpenPanelComponent
          clientId={process.env.OPENPANEL_CLIENT_ID}
          trackScreenViews={true}
          trackAttributes={true}
          trackOutgoingLinks={true}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

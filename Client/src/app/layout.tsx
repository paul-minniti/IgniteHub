import type { Metadata, Viewport } from "next";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "IgniteHub",
		template: "%s | IgniteHub"
	},
	description:
		"IgniteHub is a next-gen ERP platform for influencers, freelancers, and entrepreneurs.",
	keywords: [
		"IgniteHub",
		"ERP",
		"Business Software",
		"Influencers",
		"Freelancers",
		"Startup",
		"Technology"
	],
	authors: [{ name: "IgniteHub Team", url: "https://getignitehub.com" }],
	creator: "IgniteHub",
	publisher: "IgniteHub",
	openGraph: {
		type: "website",
		url: "https://getignitehub.com",
		title: "IgniteHub",
		description:
			"IgniteHub is a next-gen ERP platform for influencers, freelancers, and entrepreneurs.",
		siteName: "IgniteHub",
		images: [
			{
				url: "https://getignitehub.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "IgniteHub – Next-Gen ERP Software"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		site: "@IgniteHub",
		creator: "@IgniteHub",
		title: "IgniteHub",
		description:
			"IgniteHub is a next-gen ERP platform for influencers, freelancers, and entrepreneurs.",
		images: ["https://getignitehub.com/og-image.png"]
	},
	icons: {
		icon: "/favicon.ico"
	},
	manifest: "/site.webmanifest",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	},
	alternates: {
		canonical: "https://getignitehub.com"
	}
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1
};

export const themeColor = "#ffffff";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "@/utils/createEmotionCache";
import theme from "@/utils/Theme/theme";

// This replaces your ThemeProviderWrapper
export default function ThemeRegistry({
	children
}: {
	children: React.ReactNode;
}) {
	// Create or reuse a client-side cache. We only create it once per browser session.
	const [cache] = React.useState(() => createEmotionCache());

	/**
	 * This hook lets us inject server-rendered Emotion styles into the HTML
	 * so that hydration on the client won’t mismatch.
	 */
	useServerInsertedHTML(() => {
		// The cache.inserted object contains the actual CSS that was generated
		// during server rendering. We gather it up and output it as a <style> tag.
		const styles = Object.values(cache.inserted);

		if (styles.length === 0) {
			return null;
		}

		return (
			<style
				data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
				dangerouslySetInnerHTML={{ __html: styles.join(" ") }}
			/>
		);
	});

	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CacheProvider>
	);
}

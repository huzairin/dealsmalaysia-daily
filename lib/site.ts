/** Registrable domain — email and public branding use this (no www). */
export const siteDomain = "dealsmalaysia-daily.com";

/** Canonical site URL (www). */
export const siteUrl = `https://www.${siteDomain}`;

export const siteHostname = new URL(siteUrl).hostname;
export const contactEmail = `hello@${siteDomain}`;

export const siteName = "Deals Malaysia Daily";
export const defaultDescription =
  "Independent tech reviews, VPN and hosting comparisons, and Malaysian shopping deals — written for readers in Malaysia.";

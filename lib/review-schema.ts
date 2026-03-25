import { siteName, siteUrl } from "@/lib/site";

type ProductReviewJsonLdInput = {
  productName: string;
  description: string;
  authorName: string;
  ratingValue: number;
  bestRating?: number;
  datePublished: string;
  reviewUrl: string;
};

/** Schema.org Product + Review for rich results (where eligible). */
export function productReviewJsonLd({
  productName,
  description,
  authorName,
  ratingValue,
  bestRating = 5,
  datePublished,
  reviewUrl,
}: ProductReviewJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: productName,
        description,
        brand: { "@type": "Brand", name: productName },
        url: reviewUrl,
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Product", name: productName },
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(ratingValue),
          bestRating: String(bestRating),
        },
        author: { "@type": "Person", name: authorName },
        publisher: { "@type": "Organization", name: siteName, url: siteUrl },
        datePublished,
        reviewBody: description,
        url: reviewUrl,
      },
    ],
  };
}

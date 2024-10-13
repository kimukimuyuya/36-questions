import React from "react";
import Head from "next/head";
import { MetaTypes } from "@/types/metatypes";
import { useRouter } from "next/router";

export const SeoHead = ({
  title,
  titleTemplate,
  description,
  keyWords,
  ogType,
  imgUrl,
}: MetaTypes) => {
  const router = useRouter();
  const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;  
  const Url = `${siteUrl}${router.asPath}`;
  const siteTitle = `${title} - ${titleTemplate}`;
  // imageUrlを絶対パスにする
  const absoluteImgPath = `${siteUrl}${imgUrl}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "36の質問",
    "description": "関係性を深める、話題提供アプリ",
    "url": Url,
    "image": absoluteImgPath,
    "applicationCategory": "Social",
    "operatingSystem": "Web",
    "additionalType": "https://schema.org/Application"
  };

  return (
    <Head>
      <meta name="viewport" content={"width=device-width, initial-scale=1"} />
      <title>{siteTitle}</title>
      <link href={Url} rel="canonical" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyWords} />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:site" content="@kimu26sotsu" />
      <meta name="twitter:creator" content="@kimu26sotsu" />
      <meta name="twitter:title" content="36の質問" />
      <meta name="twitter:description" content="関係性を深める話題提供アプリ" />
      <meta name="twitter:image" content={absoluteImgPath} />
      <meta property="og:image" content={absoluteImgPath} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={Url} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <link rel="icon" href="/heart_icon.png" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
};
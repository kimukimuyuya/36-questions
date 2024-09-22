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
  return (
    <Head>
      <meta name="viewport" content={"width=device-width, initial-scale=1"} />
      <title>{siteTitle}</title>
      <link href={Url} rel="canonical" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyWords} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:title" content="36の質問" />
      <meta name="twitter:description" content="関係性を深める話題提供アプリ" />
      {/* TODO:public/に1200x628pxの画像を用意する */}
      <meta name="twitter:image" content="/twitter-image.png" />
      {/* TODO:public/に1200x628pxの画像を用意する */}
      <meta property="og:image" content={imgUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={Url} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {/* TOD:アイコンも用意したい */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
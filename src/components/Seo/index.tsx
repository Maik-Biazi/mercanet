import Head from 'next/head';

export function Seo({
  seo,
  title = ``,
  description = ``,
  image = `/share.jpg`,
}: any) {
  return (
    <Head>
      <title>{seo?.data?.seos[0].componentSeo.metaTitle || title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
      />
      {/* Google Specific */}
      <meta
        name="description"
        content={
          seo?.data?.seos[0].componentSeo?.metaDescription || description
        }
      />
      <meta
        name="keywords"
        content={seo?.data?.seos[0].componentSeo?.keywords}
      />
      <meta name="author" content="Mercanet" />
      <link rel="canonical" href="https://mercanet.vercel.app" />
      {/* Facebook */}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta
        property="og:title"
        content={seo?.data?.seos[0].componentSeo?.metaTitle || title}
      />
      <meta
        property="og:description"
        content={
          seo?.data?.seos[0].componentSeo?.metaDescription || description
        }
      />
      <meta property="og:url" content="https://mercanet.vercel.app" />
      <meta property="og:site_name" content="Mercanet" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content={
          seo?.data?.seos[0].componentSeo?.metaDescription || description
        }
      />
      <meta
        name="twitter:title"
        content={seo?.data?.seos[0].componentSeo?.metaTitle || title}
      />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}

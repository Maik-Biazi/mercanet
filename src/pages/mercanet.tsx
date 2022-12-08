import { GetStaticProps } from 'next';

import { BannerSolutions } from '@/components/BannerSolutions';
import { Benefits } from '@/components/Benefits';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { HeaderMercanet } from '@/components/HeaderMercanet';
import { Results } from '@/components/Results';
import { getFeature, getInformation, getSeo } from '@/lib/api';
import { Seo } from '@/components/Seo';

export default function Mercanet({ dataFeature, dataInformation, seo }: any) {
  const { feature } = dataFeature.data;
  const { information } = dataInformation.data;
  return (
    <>
      <Seo seo={seo} />
      <HeaderMercanet client={information.linkClient} />
      <Features data={feature} />
      <BannerSolutions />
      <Results />
      <Benefits />
      <Footer data={information} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dataFeature = (await getFeature()) || [];
  const dataInformation = (await getInformation()) || [];
  const seo = (await getSeo(`/`)) || [];

  return {
    props: { dataFeature, dataInformation, seo },
    revalidate: 10,
  };
};

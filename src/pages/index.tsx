import { GetStaticProps } from 'next';

import { BannerImpulse } from '@/components/BannerImpulse';
import { BannerSolutions } from '@/components/BannerSolutions';
import { CarouselClients } from '@/components/CarouselClients';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Integrations } from '@/components/Integrations';
import { Navbar } from '@/components/Navbar';
import { Slides } from '@/components/Slides';

import { Seo } from '@/components/Seo';
import {
  getClients,
  getFeature,
  getInformation,
  getIntegrations,
  getSeo,
} from '@/lib/api';

export default function Home({
  dataFeature,
  dataIntegration,
  dataClients,
  dataInformation,
  seo,
}: any) {
  const { feature } = dataFeature.data;
  const { integration } = dataIntegration.data;
  const { client } = dataClients.data;
  const { information } = dataInformation.data;

  return (
    <>
      <Seo seo={seo} />
      <Slides />
      <Navbar client={information.linkClient} />
      <Features data={feature} />
      <Integrations data={integration} />
      <BannerSolutions />
      <BannerImpulse />
      <CarouselClients data={client} />
      <Footer data={information} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dataFeature = (await getFeature()) || [];
  const dataIntegration = (await getIntegrations()) || [];
  const dataClients = (await getClients()) || [];
  const dataInformation = (await getInformation()) || [];
  const seo = (await getSeo(`/`)) || [];

  return {
    props: { dataFeature, dataIntegration, dataClients, dataInformation, seo },
    revalidate: 10,
  };
};

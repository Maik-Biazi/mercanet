import { GetStaticProps } from 'next';

import { Footer } from '@/components/Footer';
import { HeaderContato } from '@/components/HeaderContato';
import { Maps } from '@/components/Maps';

import { getInformation, getSeo } from '@/lib/api';
import { Seo } from '@/components/Seo';

export default function Contato({ dataInformation, seo }: any) {
  const { information } = dataInformation.data;
  return (
    <>
      <Seo seo={seo} />
      <HeaderContato data={information} />
      <Maps />
      <Footer data={information} set />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dataInformation = (await getInformation()) || [];
  const seo = (await getSeo(`/`)) || [];

  return {
    props: { dataInformation, seo },
    revalidate: 10,
  };
};

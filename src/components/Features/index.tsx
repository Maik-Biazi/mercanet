import Image from 'next/image';
import Link from 'next/link';
import { Container, FeatureContainer } from './styles';

import imgFeatures from '@/assets/Features/img-features.svg';
import { Feature } from '@/components/Feature';

interface FeatureData {
  data: {
    title: string;
    subTitle: string;
    titleLink: string;
    urlLink: string;
    Feature: [];
    Feature2: [];
  };
}

interface Feature {
  id: number;
  icon: {
    url: string;
    width: string;
    height: string;
  };
  iconWhite: {
    url: string;
    width: string;
    height: string;
  };
  title: string;
  description: string;
  subDescription: string;
}

export const Features = ({ data }: FeatureData) => {
  return (
    <>
      <Container>
        <header id="features">
          <div className="esq">
            <span>{data.subTitle}</span>
            <h2>{data.title}</h2>
          </div>
          <div className="dir">
            <Link href="/contato">
              <a>{data.titleLink}</a>
            </Link>
          </div>
        </header>
        <FeatureContainer>
          <div className="col__features">
            {data.Feature.map((feature: Feature) => {
              const imageUrl = `${
                feature.icon.url.startsWith(`/`)
                  ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                  : ``
              }${feature.icon.url}`;
              const imageUrlWhite = `${
                feature.iconWhite.url.startsWith(`/`)
                  ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                  : ``
              }${feature.iconWhite.url}`;
              return (
                <div key={feature.id} className="feature__div">
                  <Feature
                    icon={imageUrl}
                    width={feature.icon.width}
                    height={feature.icon.height}
                    iconWhite={imageUrlWhite}
                    title={feature.title}
                    description={feature.description}
                    subDescription={feature.subDescription}
                  />
                </div>
              );
            })}
          </div>
          <div className="svg__features">
            <Image
              src={imgFeatures}
              layout="fixed"
              width="629"
              height="613"
              alt="Features Mercanet"
            />
          </div>
          <div className="col__features">
            {data.Feature2.map((feature: Feature) => {
              const imageUrl = `${
                feature.icon.url.startsWith(`/`)
                  ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                  : ``
              }${feature.icon.url}`;
              const imageUrlWhite = `${
                feature.iconWhite.url.startsWith(`/`)
                  ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                  : ``
              }${feature.iconWhite.url}`;
              return (
                <div key={feature.id} className="feature__div">
                  <Feature
                    icon={imageUrl}
                    width={feature.icon.width}
                    height={feature.icon.height}
                    iconWhite={imageUrlWhite}
                    title={feature.title}
                    description={feature.description}
                    subDescription={feature.subDescription}
                  />
                </div>
              );
            })}
          </div>
        </FeatureContainer>
      </Container>
    </>
  );
};

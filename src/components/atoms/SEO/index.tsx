import React from 'react';
import { NextSeo } from 'next-seo';

import { SEOprops } from './types';

const SEO = ({ SEOinformation }: SEOprops) => {
  return (
    <div data-testid="SEO">
      <NextSeo
        title={SEOinformation.title}
        description={SEOinformation.description}
        canonical={SEOinformation.url}
        openGraph={{
          url: SEOinformation.url,
          title: SEOinformation.title,
          description: SEOinformation.description,
          siteName: SEOinformation.siteName
        }}
        twitter={{
          handle: SEOinformation.twitter.handle,
          site: SEOinformation.twitter.site,
          cardType: SEOinformation.twitter.cardType
        }}
      />
    </div>
  );
};

export default SEO;
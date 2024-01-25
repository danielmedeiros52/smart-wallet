import SEO from '@/components/atoms/SEO';
import HomeTemplate from "@/components/templates/HomeTemplate";

const seoInfo = {
  title: 'SmartFastPay',
  url: 'https://open-h.com/',
  description: 'The Smart Way to Process Payments in Latin America',
  siteName: 'Test',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
};


const HomePage = () => {

  return (
    <>
      <SEO SEOinformation={seoInfo} />
      <HomeTemplate />
    </>
  );
};


export default HomePage;

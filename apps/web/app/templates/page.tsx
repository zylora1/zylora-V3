import type {Metadata} from 'next';
import MarketingNav from '../../components/MarketingNav';
import TemplateGallery from '../../components/TemplateGallery';

export const metadata:Metadata={
  title:'Premium website templates | Zylora',
  description:'Explore Zylora website templates across distinctive design directions.',
  alternates:{canonical:'/templates'},
  openGraph:{
    title:'Premium website templates | Zylora',
    description:'Explore Zylora website templates.',
    type:'website'
  }
};

export default function Page(){
  return (
    <main className="publicGallery">
      <MarketingNav/>
      <div className="galleryPage">
        <header className="galleryHeader">
          <h1>Find your design direction</h1>
          <p>1,008 premium templates carefully crafted for your business.</p>
        </header>
        <TemplateGallery/>
      </div>
    </main>
  );
}

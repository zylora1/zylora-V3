import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {templateLoaders} from '../../../lib/templateRegistry';

export const metadata:Metadata={robots:{index:false,follow:false},title:'Template preview | Zylora'};

export default async function TemplatePreview({params}:{params:Promise<{key:string}>}){
 const {key}=await params;const loader=templateLoaders[key];if(!loader)notFound();const mod=await loader();const Template=mod.default;
 return <Template content={{}} theme={{}}/>;
}

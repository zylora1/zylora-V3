export const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
export class ApiError extends Error { constructor(public status:number, message:string){super(message)} }
export async function api<T>(path:string, init:RequestInit={}):Promise<T>{
  const res=await fetch(`${API}${path}`,{...init,credentials:'include',headers:{'content-type':'application/json',...(init.headers||{})}});
  const text=await res.text(); let body:any={}; try{body=text?JSON.parse(text):{}}catch{body={detail:text}}
  if(!res.ok) throw new ApiError(res.status,body.detail||`Request failed (${res.status})`); return body as T;
}
export type SessionUser={id:number;email:string;role:string;plan:string;ai_credits:number;lead_credits:number};
export type Site={id:number;name:string;slug:string;origin:string;page_count:number;template_key?:string;state:string;content:Record<string,any>;seo:Record<string,any>;theme:Record<string,any>};

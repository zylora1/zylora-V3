'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {LayoutDashboard,Globe2,Users,CalendarDays,Palette,Settings,BookOpen,LogOut} from 'lucide-react';
import {api} from '../lib/api';

const nav=[
  ['/dashboard',LayoutDashboard,'Dashboard'],
  ['/templates',Palette,'Templates'],
  ['/dashboard#sites',Globe2,'Sites'],
  ['/dashboard#leads',Users,'Leads'],
  ['/dashboard#appointments',CalendarDays,'Appointments'],
  ['/blog',BookOpen,'Blog'],
  ['/admin',Settings,'Admin']
] as const;

export default function AppShell({children}:{children:React.ReactNode}){
  const path=usePathname();
  
  return (
    <div className="dashboard">
      <aside className="side">
        <Link className="logoMark" href="/dashboard" aria-label="Dashboard Home">
          <img src="/zylora-mark.png" alt="Zylora"/>
        </Link>
        {nav.map(([href,I,label])=>(
          <Link key={href} title={label} className={`sideLink ${path===href||(path.startsWith(href) && href!=='/dashboard')?'active':''}`} href={href}>
            <I size={20} strokeWidth={2.5}/>
          </Link>
        ))}
        <button title="Log out" className="sideLink logout" onClick={async()=>{
          await api('/auth/logout',{method:'POST'}).catch(()=>{});
          location.href='/login';
        }}>
          <LogOut size={20} strokeWidth={2.5}/>
        </button>
      </aside>
      <main className="dashmain">
        {children}
      </main>
    </div>
  );
}

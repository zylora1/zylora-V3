'use client';
import Script from 'next/script';
import {useCallback,useState} from 'react';
import Turnstile from './Turnstile';
import {api} from '../lib/api';

declare global {interface Window{google?:any}}

export default function AuthForm({mode}:{mode:'login'|'signup'}){
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[showPassword,setShowPassword]=useState(false);
  const[token,setToken]=useState('');
  const[msg,setMsg]=useState('');
  const[busy,setBusy]=useState(false);
  const turn=useCallback((t:string)=>setToken(t),[]);
  
  async function submit(e:React.FormEvent){
    e.preventDefault();
    setBusy(true);setMsg('');
    try{
      await api(`/auth/${mode}`,{method:'POST',body:JSON.stringify({email,password,turnstile_token:token||null})});
      location.href='/dashboard'
    }catch(e:any){
      setMsg(e.message)
    }finally{
      setBusy(false)
    }
  }
  
  async function google(credential:string){
    setBusy(true);
    try{
      await api('/auth/google',{method:'POST',body:JSON.stringify({id_token:credential,turnstile_token:token||null})});
      location.href='/dashboard'
    }catch(e:any){
      setMsg(e.message)
    }finally{
      setBusy(false)
    }
  }
  
  function googleReady(){
    if(!window.google)return;
    window.google.accounts.id.initialize({client_id:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,callback:(r:any)=>google(r.credential)});
  }

  return (
    <main className="auth">
      <div className="auth-brand">
        <div>
          <a href="/"><img className="logo" src="/zylora-logo.png" alt="Zylora"/></a>
          <h2>{mode==='login'?'Welcome back to your workspace.':'Build the website. Run the business.'}</h2>
          <p>{mode==='login'?'Manage your sites, leads, and appointments in one place.':'Join thousands of businesses operating on Zylora.'}</p>
        </div>
        <div style={{color: '#6b7280', fontSize: '14px'}}>
          &copy; {new Date().getFullYear()} Zylora Inc.
        </div>
      </div>
      <div className="auth-wrapper">
        <form onSubmit={submit}>
          <div>
            <h1>{mode==='login'?'Sign in':'Create account'}</h1>
            <p className="mutedCopy">{mode==='login'?'Enter your details below to sign in to your account':'Enter your details below to create your account'}</p>
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" required placeholder="name@company.com" disabled={busy}/>
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type={showPassword?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} autoComplete={mode==='login'?'current-password':'new-password'} minLength={8} required placeholder="••••••••" disabled={busy}/>
            <button type="button" className="pw-toggle" onClick={()=>setShowPassword(!showPassword)} tabIndex={-1}>{showPassword?'Hide':'Show'}</button>
          </div>
          
          <Turnstile onToken={turn}/>
          
          {msg&&<div className="formError" role="alert">{msg}</div>}
          
          <button className="submit-btn" disabled={busy}>{busy?'Please wait…':mode==='login'?'Sign in':'Create account'}</button>
          
          <div style={{display:'flex', alignItems:'center', gap:'12px', margin:'8px 0'}}>
            <div style={{flex:1, height:'1px', background:'#2a2f37'}}></div>
            <span style={{color:'#8d939d', fontSize:'13px', fontWeight:500}}>OR</span>
            <div style={{flex:1, height:'1px', background:'#2a2f37'}}></div>
          </div>
          
          <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" onLoad={googleReady} onError={()=>setMsg('Google Sign-In failed to load.')}/>
          <button type="button" className="google" onClick={()=>window.google?.accounts.id.prompt()} disabled={busy}>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>
          
          <div className="auth-links">
            <a href={mode==='login'?'/signup':'/login'}>{mode==='login'?'Need an account? Sign up':'Already have an account? Sign in'}</a>
            {mode==='login'&&<a href="/forgot-password">Forgot password?</a>}
          </div>
        </form>
      </div>
    </main>
  );
}

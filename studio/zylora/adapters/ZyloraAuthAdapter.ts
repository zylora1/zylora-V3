/**
 * ZyloraAuthAdapter: Bridge between Zylora's authenticated session and the Onlook Studio subsystem.
 * Preserves Zylora tenant sovereignty, CSRF protection, and permission scoping.
 */

export interface ZyloraUser {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

export class ZyloraAuthAdapter {
  readonly csrf: string;
  readonly user: ZyloraUser | null;

  constructor(csrf?: string, user?: ZyloraUser | null) {
    this.csrf = csrf || this.resolveCsrf();
    this.user = user || this.resolveUser();
  }

  private resolveCsrf(): string {
    if (typeof window !== 'undefined') {
      const meta = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null;
      if (meta?.content) return meta.content;
      const ctx = (window as any).ZYLORA_STUDIO_CONTEXT;
      if (ctx?.csrf) return ctx.csrf;
    }
    return '';
  }

  private resolveUser(): ZyloraUser | null {
    if (typeof window !== 'undefined') {
      const ctx = (window as any).ZYLORA_STUDIO_CONTEXT;
      if (ctx?.user) return ctx.user;
    }
    return null;
  }

  getHeaders(extra: Record<string, string> = {}): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...extra,
    };
    if (this.csrf) {
      headers['X-CSRF-Token'] = this.csrf;
    }
    return headers;
  }

  hasScope(scope: string): boolean {
    if (!this.user) return false;
    // The backend remains authoritative.  These values are UI capability
    // hints only and deliberately fail closed for anonymous/missing context.
    const role = String(this.user.role || 'USER').toUpperCase();
    if (role === 'SUPER_ADMIN') return true;
    return new Set([
      'studio.read',
      'studio.write',
      'studio.publish',
      'assets.read',
      'assets.write',
      'ai.use',
      'domains.read',
    ]).has(scope);
  }
}

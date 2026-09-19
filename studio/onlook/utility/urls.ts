export function getValidUrl(url: string) {
    const prependedUrl = prependHttp(url);
    try {
        const parsed = new URL(prependedUrl);
        return parsed.toString();
    } catch {
        return prependedUrl;
    }
}

export function isApexDomain(domain: string): {
    isValid: boolean;
    error?: string;
} {
    const cleaned = domain.trim().toLowerCase().replace(/^https?:\/\//, '').split('/')[0];
    const parts = cleaned.split('.');
    if (parts.length < 2) {
        return {
            isValid: false,
            error: 'Please enter a domain with suffix (e.g., example.com or example.co.uk)',
        };
    }
    if (parts.length > 2 && !['co.uk', 'com.au', 'co.nz'].some(s => cleaned.endsWith(s))) {
        return {
            isValid: false,
            error: 'Please enter a domain without subdomains (e.g., example.com or example.co.uk)',
        };
    }
    return {
        isValid: true,
    };
}

export function prependHttp(url: string, { https = true } = {}) {
    if (typeof url !== 'string') {
        throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
    }

    url = url.trim();

    if (/^\.*\/|^(?!localhost)(\w+?:)/.test(url)) {
        return url;
    }

    // Special case for localhost - use http:// instead of https://
    if (url.startsWith('localhost')) {
        return `http://${url}`;
    }

    return url.replace(/^(?!(?:\w+?:)?\/\/)/, https ? 'https://' : 'http://');
}

export const getValidSubdomain = (subdomain: string) => {
    // Make this a valid subdomain by:
    // 1. Converting to lowercase
    // 2. Replacing invalid characters with hyphens
    // 3. Removing consecutive hyphens
    // 4. Removing leading/trailing hyphens
    return subdomain
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};

export const getPublishUrls = (url: string) => {
    // Return a list including url and www.url
    return [url, `www.${url}`];
};

export const inferPageFromUrl = (url: string): { name: string; path: string } => {
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;

        if (pathname === '/' || pathname === '') {
            return { name: 'Home', path: '/' };
        }

        const segments = pathname.replace(/^\//, '').split('/').filter(Boolean);

        const lastSegment = segments[segments.length - 1];

        const pageName = lastSegment ? lastSegment.replace(/[-_]/g, ' ') : 'page';

        return { name: pageName, path: pathname };
    } catch (error) {
        console.error('Failed to parse URL:', error);
        return { name: 'Unknown Page', path: '/' };
    }
};

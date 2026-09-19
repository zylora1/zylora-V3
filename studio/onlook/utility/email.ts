const FREE_EMAIL_DOMAINS = new Set([
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'icloud.com',
    'aol.com',
    'protonmail.com',
    'mail.com',
]);

export const isFreeEmail = (email: string) => {
    const domain = email.split('@').at(-1);
    return FREE_EMAIL_DOMAINS.has(domain ?? '');
};

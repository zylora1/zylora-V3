export const constructInvitationLink = (publicUrl: string, invitationId: string, token: string) => {
    const url = new URL('/invitation/' + invitationId, publicUrl);
    url.searchParams.set('token', token);
    return url.toString();
};

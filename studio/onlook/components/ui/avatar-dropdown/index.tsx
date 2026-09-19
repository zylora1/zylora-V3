'use client';

import { Avatar, AvatarFallback } from '@onlook/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@onlook/ui/dropdown-menu';
import { Icons } from '@onlook/ui/icons';
import { useState } from 'react';

export const CurrentUserAvatar = ({ className }: { className?: string }) => {
    const [open, setOpen] = useState(false);
    const user = (window as any).ZYLORA_STUDIO_CONTEXT?.user || { email: 'user@zylora.com', name: 'Zylora Admin' };
    const initials = (user.name || user.email || 'Z').charAt(0).toUpperCase();

    const handleSignOut = () => {
        window.location.href = '/logout';
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-center rounded-full focus:outline-none focus:ring-1 focus:ring-ring">
                    <Avatar className={className}>
                        <AvatarFallback className="bg-muted text-foreground text-xs font-medium">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-1 bg-background/95 backdrop-blur-xl border border-border">
                <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">{user.name || 'Zylora User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { window.location.href = '/dashboard'; }}>
                    <Icons.Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <Icons.Exit className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

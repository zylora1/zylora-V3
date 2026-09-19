import { convertRawFont, FAMILIES } from '@onlook/fonts';
import type { Font, RawFont } from '@onlook/models';
import { makeAutoObservable } from 'mobx';

export class FontSearchManager {
    private _systemFonts: Font[] = [];
    private _searchResults: Font[] = [];
    private _currentFontIndex = 0;
    private _batchSize = 20;
    private _isFetching = false;
    private _allFontFamilies: RawFont[] = FAMILIES as RawFont[];
    private _fonts: Font[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async loadInitialFonts(): Promise<void> {
        const initialFonts = this._allFontFamilies.slice(0, this._batchSize);
        const convertedFonts = initialFonts.map((font) => convertRawFont(font));
        this._systemFonts = convertedFonts;
        this._currentFontIndex = this._batchSize;

        try {
            await this.loadFontBatch(convertedFonts);
        } catch (error) {
            console.error('Failed to load initial fonts:', error);
        }
    }

    private async loadFontBatch(fonts: Font[]): Promise<void> {
        if (typeof document === 'undefined') return;
        try {
            const families = fonts.map((f) => f.family.replace(/ /g, '+')).join('&family=');
            if (!families) return;
            const href = `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            }
        } catch {
            // Font preload failure non-blocking
        }
    }

    async fetchNextFontBatch(): Promise<{ fonts: Font[]; hasMore: boolean }> {
        if (this._isFetching) {
            console.log('Already fetching fonts, please wait...');
            return {
                fonts: [],
                hasMore: this._currentFontIndex < this._allFontFamilies.length,
            };
        }

        this._isFetching = true;

        try {
            const start = this._currentFontIndex;
            const end = Math.min(start + this._batchSize, this._allFontFamilies.length);

            if (start >= this._allFontFamilies.length) {
                return { fonts: [], hasMore: false };
            }

            const batchFonts = this._allFontFamilies
                .slice(start, end)
                .map((font) => convertRawFont(font));

            await this.loadFontBatch(batchFonts);
            this._systemFonts.push(...batchFonts);
            this._currentFontIndex = end;

            return {
                fonts: batchFonts,
                hasMore: end < this._allFontFamilies.length,
            };
        } catch (error) {
            console.error('Error fetching font batch:', error);
            throw error;
        } finally {
            this._isFetching = false;
        }
    }

    async searchFonts(query: string): Promise<Font[]> {
        if (!query) {
            this._searchResults = [];
            return [];
        }

        try {
            const q = query.toLowerCase().trim();
            const matching = this._allFontFamilies.filter((f) => f.family.toLowerCase().includes(q)).slice(0, 20);
            const fonts = matching
                .map((font) => convertRawFont(font))
                .filter((font) => !this._fonts.some((f) => f.family === font.family));

            if (fonts.length === 0) {
                this._searchResults = [];
                return [];
            }

            await this.loadFontBatch(fonts);
            this._searchResults = fonts;
            return fonts;
        } catch (error) {
            console.error('Error searching fonts:', error);
            return [];
        }
    }

    async loadFontFromBatch(fonts: Font[]): Promise<void> {
        await this.loadFontBatch(fonts);
    }

    resetFontFetching(): void {
        this._currentFontIndex = 0;
        this._isFetching = false;
    }

    updateFontsList(fonts: Font[]): void {
        this._fonts = fonts;
    }

    clear(): void {
        this._systemFonts = [];
        this._searchResults = [];
        this._currentFontIndex = 0;
        this._isFetching = false;
        this._fonts = [];
    }

    get systemFonts(): Font[] {
        return this._systemFonts.filter(
            (fontFamily) => !this._fonts.some((font) => font.family === fontFamily.family),
        );
    }

    get searchResults(): Font[] {
        return this._searchResults.filter(
            (fontFamily) => !this._fonts.some((font) => font.family === fontFamily.family),
        );
    }

    get isFetching(): boolean {
        return this._isFetching;
    }

    get currentFontIndex(): number {
        return this._currentFontIndex;
    }

    get hasMoreFonts(): boolean {
        return this._currentFontIndex < this._allFontFamilies.length;
    }
} 
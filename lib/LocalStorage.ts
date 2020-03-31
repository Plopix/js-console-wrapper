interface LocalStorageInterfance {
    setItem: (key: string, value?: any) => void;
    removeItem: (key: string) => void;
    getItem: (key: string) => any | null;
}

class LocalStorage {
    private _storeAvailable: boolean;
    private _store: LocalStorageInterfance;

    constructor() {
        let storage;
        this._storeAvailable = false;
        try {
            storage = window['localStorage'];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            this._storeAvailable = true;
        } catch (e) {
            this._storeAvailable = e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage !== null && typeof storage !== 'undefined' && storage.length !== 0);
        }
        this._store = window['localStorage'];
    }

    set(key: string, value: any): void {
        if (this._storeAvailable) {
            this._store.setItem(key, JSON.stringify(value));
        }
    }

    get(key: string): any | null {
        if (this._storeAvailable) {
            return JSON.parse(this._store.getItem(key));
        }
        return null;
    }
}

export const localStorage = new LocalStorage();

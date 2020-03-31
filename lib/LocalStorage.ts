interface LocalStorageInterfance {
    setItem: (key: string, value?: any) => void;
    removeItem: (key: string) => void;
    getItem: (key: string) => any | null;
}

class LocalStorage {
    private _storeAvailable: boolean;
    private _store: LocalStorageInterfance | null;

    constructor() {
        let storage;
        this._storeAvailable = false;
        this._store = null;
        try {
            storage = window['localStorage'];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            this._storeAvailable = true;
        } catch (e) {
            this._storeAvailable = false;
        }
    }

    get(key: string): any | null {
        if (this._storeAvailable && this._store !== null) {
            return JSON.parse(this._store.getItem(key));
        }
        return null;
    }
}

export const localStorage = new LocalStorage();

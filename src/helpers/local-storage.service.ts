import type {LocalStorageKeys} from "../types/local-storage-keys.enum.ts";

class LocalStorageService {
    save(key: LocalStorageKeys, value: any): void {
        try {
            if (typeof value === "string") {
                localStorage.setItem(key, value);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (err) {
            console.error(`Nie udało się zapisać ${key} w localStorage:`, err);
        }
    }

    get<T = any>(key: LocalStorageKeys): T | string | null {
        const raw: string | null = localStorage.getItem(key);
        if (raw == null) return null;

        try {
            return JSON.parse(raw);
        } catch {
            return raw;
        }
    }

    remove(key: LocalStorageKeys): void {
        localStorage.removeItem(key);
    }

    clearAll(): void {
        localStorage.clear();
    }
}

export default new LocalStorageService();

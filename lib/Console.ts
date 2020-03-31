import {Logger} from "./Logger";
import {Level, Log} from "./LoggerInterface";
import {localStorage} from "./LocalStorage";

export class Console extends Logger {

    protected innerLog(log: Log): void {
        const verbosity = localStorage.get('plopix.console.verbosity') != null ? localStorage.get('plopix.console.verbosity') : this._verbosity;
        if (log.level >= verbosity) {
            this.show(log);
        }
    }

    private styleForLevel(level: Level): string {
        switch (level) {
            case Level.SUCCESS:
                return "color: #fff; background-color: green; padding: 4px";
            case Level.DEBUG:
                return "";
            case Level.INFO:
                return "font-weight:bold";
            case Level.NOTICE:
                return "color: yellow";
            case Level.WARNING:
                return "color: #ff9900";
            case Level.ERROR:
                return "color: red";
            case Level.CRITICAL:
                return "color: red; font-weight: bold";
            case Level.ALERT:
                return "color: #fff; background-color: red; padding: 4px";
            case Level.EMERGENCY:
                return "color: #fff; background-color: red; padding: 4px; font-weight: bold";
        }
        return "";
    }

    private showStyledLog(log: Log): void {
        let iterableContext: any[] = [];
        if (log.context !== null && (typeof log.context !== "undefined")) {
            iterableContext = log.context;
            if (!Array.isArray(iterableContext)) {
                iterableContext = [iterableContext];
            }
        }
        console.log("%c" + log.message, this.styleForLevel(log.level), ...iterableContext);
    }

    private show(log: Log): void {
        if (typeof console.log !== "undefined") {
            this.showStyledLog(log);
        }
    }

    public groupStart(title: string): void {
        if (typeof console.group !== "undefined") {
            console.group(title);
        }
    }

    public groupEnd(): void {
        if (typeof console.groupEnd !== "undefined") {
            console.groupEnd();
        }
    }

    public dir(data: any): void {
        if (typeof console.dir !== "undefined") {
            console.dir(data);
        }
    }

    public table(data: any): void {
        if (typeof console.table !== "undefined") {
            console.table(data);
        }
    }

    public clear(): void {
        if (typeof console.clear !== "undefined") {
            console.clear();
        }
    }

    public memory(): void {
        if (typeof console.memory !== "undefined") {
            console.memory;
        }
    }

    public trace(): void {
        if (typeof console.trace !== "undefined") {
            console.trace();
        }
    }
}

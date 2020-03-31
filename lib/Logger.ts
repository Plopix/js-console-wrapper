import {LoggerInterface, Level, Log} from "./LoggerInterface";

export abstract class Logger implements LoggerInterface {
    protected _verbosity: Level;

    constructor() {
        this._verbosity = Level.DEBUG;
    }

    set verbosity(value: Level) {
        this._verbosity = value;
    }

    get verbosity(): Level {
        return this._verbosity;
    }

    protected innerLog(log: Log): void {
        // do nothing here
    }

    public log(level: Level, message: string, context?: any): void {
        this.innerLog({message, level, context});
    }

    public emergency(message: string, context?: any): void {
        this.log(Level.EMERGENCY, message, context);
    }

    alert(message: string, context?: any): void {
        this.log(Level.ALERT, message, context);
    }

    critical(message: string, context?: any): void {
        this.log(Level.CRITICAL, message, context);
    }

    error(message: string, context?: any): void {
        this.log(Level.ERROR, message, context);
    }

    warning(message: string, context?: any): void {
        this.log(Level.WARNING, message, context);
    }

    notice(message: string, context?: any): void {
        this.log(Level.NOTICE, message, context);
    }

    info(message: string, context?: any): void {
        this.log(Level.INFO, message, context);
    }

    debug(message: string, context?: any): void {
        this.log(Level.DEBUG, message, context);
    }

    success(message: string, context?: any): void {
        this.log(Level.SUCCESS, message, context);
    }
}




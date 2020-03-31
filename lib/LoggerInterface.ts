export enum Level {
    EMERGENCY = 600,
    ALERT = 550,
    CRITICAL = 500,
    ERROR = 400,
    WARNING = 300,
    NOTICE = 250,
    INFO = 200,
    DEBUG = 100,
    SUCCESS = 0
}

export type Log = {
    level: Level,
    message: string,
    context?: any
}

export interface LoggerInterface {

    // Logs with an arbitrary level.
    log(level: Level, message: string, context?: any): void;

    // System is unusable.
    emergency(message: string, context?: any): void;

    // Action must be taken immediately.
    alert(message: string, context?: any): void;

    // Critical conditions.
    critical(message: string, context?: any): void;

    // Runtime errors that do not require immediate action but should typically be logged and monitored.
    error(message: string, context?: any): void;

    //  Exceptional occurrences that are not errors.
    warning(message: string, context?: any): void;

    // Normal but significant events.
    notice(message: string, context?: any): void;

    // Interesting events.
    info(message: string, context?: any): void;

    //  Detailed debug information.
    debug(message: string, context?: any): void;

    //  When all is good
    success(message: string, context?: any): void;
}

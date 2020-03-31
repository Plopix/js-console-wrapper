# Plopix - JS Console

This package is a wrapper of `console.log` that enables outputs depending a Verbosity level that:
- you can set in the source code
- you can override via LocalStorage using the key: `plopix.console.verbosity`


## Installation

### Vanilla JS Usage

Inject the library in your code:

```html
<script src="https://github.com/Plopix/js-console-wrapper/releases/download/v1.0.1/plopix-js-console.min.js"></script>
```

You have now access to `PlopixConsole` globally.


### Node



## Usage

Just use it!

> Have a look in the [example](tests/web/tests.js).


In addition to the method provided by the `LoggerInterface` you also have

```typescript      
    groupStart(title: string): void;
    groupEnd(): void;
    dir(data: any): void;
    table(data: any): void;
    clear(): void;
    memory(): void;
    trace(): void;
```

> They won't display anything if the Browser does not support it.

### On Load Console Logging

If you want to log things on the page load, you can use a specific HTML tag.

```html
<span style="display: none" data-plopix-console data-verbosity="200" data-context="[1,2,3,4]">Oh yeah %d %d</span>
``` 

> Have a look in the [example](tests/web/tests.html).


### Many Levels

```typescript
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
```

> Can be used with Level.* in TypeScript

###  Many Method

```typescript
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
```


## Licensing

Project under the [MIT License (MIT)](LICENSE)

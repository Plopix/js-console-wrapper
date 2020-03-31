var Console = PlopixConsole;

Console.verbosity = 0;
Console.logOnLoad();

Console.debug("debug");
Console.info("info");
Console.notice("notice", [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.warning("warning");
Console.error("error");
Console.critical("critical");
Console.alert("alert");
Console.emergency("emergency");
Console.log("log");
Console.success("Success!", [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);

Console.dir([{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.table([{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.memory();


Console.groupStart("BLOC 1");
Console.info("info");
Console.log("log");
Console.success("Success!", [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.groupEnd();


Console.groupStart("BLOC 2");
Console.info("info");
Console.error("error");
Console.emergency("emergency");
Console.log("log");
    Console.groupStart("BLOC 2.1");
    Console.success("YEAH");
    Console.groupEnd();
Console.dir([{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.success("Success!", [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.dir([{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12, [{ plop: 'plo' }, 'plop', 12, { plop: 'plo' }, 'plop', 12]]);
Console.groupEnd();

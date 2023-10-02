# @gcas/fuse

## 2.4.2

-   Now requires NodeJS version 18.15.0+ (to support `fs.statfs()`).

## 2.4.1

-   Made `napi-macros` a regular dependency (fix).

## 2.4.0 [2023-09-30]

-   Renamed to `@gcas/fuse`;
-   Simplified package structure for `libfuse` dependencies (bundled into `@gcas/fuse` package);
-   Updated tests to work on Windows (tests were broken by the OS read-ahead ops);
-   Dropped support for `win-x86` (32bit) architecture.

## 2.3.2 [2023-09-06]

-   Changed repo to GCAS org (published to NPM too).

## 2.3.1 [2023-09-06]

-   Changed `displayFolder: boolean` option (OSX only) to `volicon: string | boolean`.
-   Removed `mkdir` option completely (align with FUSE).
-   Reset versioning from `2.3.*`:
    -   re-simplifies version string but increments over the old `2.2.*` versions;
    -   no significant updates in origin repos for a while, I need to prepare for more changes.
-   Added notice about Electron 20+ incompatibility (external buffers no longer supported).

## [2023-09-05]

-   First release based on the amazing following works:
    -   initial package `fuse-friends/fuse-native` by `Mathias Buus (@mafintosh)`;
    -   forked package `refinio/fuse-native`;
    -   thank you for your AMAZING WORK!;
-   Added `volname` option now specifies volume label on Windows;
-   Changed `name` option to `volname` as in FUSE;
-   Fixed `mkdir` option on POSIX systems;
-   Removed `fuse-bindings/debug` module detection (old relic);

import { InvokeArgs } from "@tauri-apps/api/tauri";
import { Command, SpawnOptions } from "@tauri-apps/api/shell";
import { Arch, OsType, Platform } from "@tauri-apps/api/os";
import { Options as NotificationOptions, Permission } from "@tauri-apps/api/notification";
import { EventCallback, UnlistenFn } from "@tauri-apps/api/helpers/event";
import { EventName } from "@tauri-apps/api/event";
import { Monitor, WebviewWindow } from "@tauri-apps/api/window";
import { BinaryFileContents, FileEntry, FsDirOptions, FsOptions } from "@tauri-apps/api/fs";
import { CliMatches } from "@tauri-apps/api/cli";
import {
    ConfirmDialogOptions,
    MessageDialogOptions,
    OpenDialogOptions,
    SaveDialogOptions,
} from "@tauri-apps/api/dialog";
import { Client, ClientOptions, FetchOptions, Response } from "@tauri-apps/api/http";

export interface TauriInterface {
    invoke<T>(cmd: string, args?: InvokeArgs): Promise<T>;

    convertFileSrc(filePath: string, protocol?: string): string;
}

export type TauriShellRunCommandResult = {
    stdout: string[]
    stderr: string[]
    pid: number | null
    exitCode: number | null
    signal: string | null
    cmd: Command
}

export interface TauriShellInterface {
    createCommand(program: string, args?: string | string[], options?: SpawnOptions): Command;

    runCommand(program: string, args?: string | string[], options?: SpawnOptions): Promise<TauriShellRunCommandResult>;

    open(path: string, openWith?: string): Promise<void>;
}

export interface TauriPathInterface {
    appCacheDir(): Promise<string>;

    appConfigDir(): Promise<string>;

    appDataDir(): Promise<string>;

    appDir(): Promise<string>;

    appLocalDataDir(): Promise<string>;

    appLogDir(): Promise<string>;

    audioDir(): Promise<string>;

    basename(path: string): string;

    cacheDir(): Promise<string>;

    configDir(): Promise<string>;

    dataDir(): Promise<string>;

    desktopDir(): Promise<string>;

    dirname(path: string): string;

    documentDir(): Promise<string>;

    downloadDir(): Promise<string>;

    executableDir(): Promise<string>;

    extname(path: string): string;

    fontDir(): Promise<string>;

    homeDir(): Promise<string>;

    isAbsolute(path: string): boolean;

    join(...paths: string[]): string;

    localDataDir(): Promise<string>;

    logDir(): Promise<string>;

    normalize(path: string): string;

    pictureDir(): Promise<string>;

    publicDir(): Promise<string>;

    resolve(...paths: string[]): string;

    resolveResource(path: string): Promise<string>;

    resourceDir(): Promise<string>;

    runtimeDir(): Promise<string>;

    templateDir(): Promise<string>;

    videoDir(): Promise<string>;
}

export interface TauriOsInterface {
    arch(): Promise<Arch>;

    locale(): Promise<string | null>;

    platform(): Promise<Platform>;

    tempdir(): Promise<string>;

    type(): Promise<OsType>;

    version(): Promise<string>;
}

export interface TauriNotificationInterface {
    isPermissionGranted(): Promise<boolean>;

    requestPermission(): Promise<Permission>;

    sendNotification(options: string | NotificationOptions): void;
}

export interface TauriEventInterface {
    emit(event: string, payload?: unknown): Promise<void>;

    listen<T>(event: EventName, handler: EventCallback<T>): Promise<UnlistenFn>;

    once<T>(event: EventName, handler: EventCallback<T>): Promise<UnlistenFn>;
}

export interface TauriProcessInterface {
    exit(exitCode?: number): Promise<void>;

    relaunch(): Promise<void>;
}

export interface TauriWindowInterface {
    availableMonitors(): Promise<Monitor[]>;

    currentMonitor(): Promise<Monitor | null>;

    getAll(): WebviewWindow[];

    getCurrent(): WebviewWindow;

    primaryMonitor(): Promise<Monitor | null>;
}

export interface TauriAppInterface {
    getName(): Promise<string>;

    getTauriVersion(): Promise<string>;

    getVersion(): Promise<string>;

    hide(): Promise<void>;

    show(): Promise<void>;
}

export interface TauriFsInterface {
    copyFile(source: string, destination: string, options?: FsOptions): Promise<void>;

    createDir(dir: string, options?: FsDirOptions): Promise<void>;

    exists(path: string, options?: FsOptions): Promise<boolean>;

    readBinaryFile(filePath: string, options?: FsOptions): Promise<Uint8Array>;

    readDir(dir: string, options?: FsDirOptions): Promise<FileEntry[]>;

    readTextFile(filePath: string, options?: FsOptions): Promise<string>;

    removeDir(dir: string, options?: FsDirOptions): Promise<void>;

    removeFile(file: string, options?: FsOptions): Promise<void>;

    renameFile(oldPath: string, newPath: string, options?: FsOptions): Promise<void>;

    writeBinaryFile(path: string, contents: BinaryFileContents, options?: FsOptions): Promise<void>;

    writeTextFile(path: string, contents: string, options?: FsOptions): Promise<void>;
}

export interface TauriClipboardInterface {
    readText(): Promise<string>;

    writeText(text: string): Promise<void>;
}

export interface TauriCliInterface {
    getMatches(): Promise<CliMatches>;
}

export interface TauriDialogInterface {
    ask(message: string, options?: string | ConfirmDialogOptions): Promise<boolean>;

    confirm(message: string, options?: string | ConfirmDialogOptions): Promise<boolean>;

    message(message: string, options?: string | MessageDialogOptions): Promise<void>;

    open(options?: OpenDialogOptions): Promise<null | string | string[]>;

    save(options?: SaveDialogOptions): Promise<string | null>;
}

export interface TauriHttpInterface {
    fetch<T>(url: string, options?: FetchOptions): Promise<Response<T>>;

    getClient(options?: ClientOptions): Promise<Client>;
}

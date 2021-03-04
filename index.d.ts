export declare function notifSuccess(
    message: string,
    options?: NotifOptions,
    hideClose?: boolean,
): {
    til: (timestamp: number) => void;
};

export declare function notifError(
    message: string, 
    options?: NotifOptions,
    hideClose?: boolean,
): {
    til: (timestamp: number) => void;
};

export declare function notifCustom(
    message: string, 
    options?: NotifOptions,
    hideClose?: boolean,
): {
    til: (timestamp: number) => void;
};

export declare function notifHide(): void;

declare type NotifOptions = {
    color?: string;
    bgColor?: string;
    bold?: boolean;
    noShadow?: boolean;
};

export declare function toastCustom(
    message: string,
    options?: NotifOptions,
    time?: number
): {
    til: (timestamp: number) => void;
};

export declare function toastError(
    message: string,
    options?: NotifOptions,
    time?: number
): {
    til: (timestamp: number) => void;
};

export declare function toastSuccess(
    message: string,
    options?: NotifOptions,
    time?: number
): {
    til: (timestamp: number) => void;
};
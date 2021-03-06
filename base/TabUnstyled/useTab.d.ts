/// <reference types="react" />
export interface UseTabProps {
    /**
     * You can provide your own value. Otherwise, we fall back to the child position index.
     */
    value?: number | string;
    /**
     * Callback invoked when new value is being set.
     */
    onChange?: (event: React.SyntheticEvent, value: number | string) => void;
    onClick?: React.MouseEventHandler;
    disabled?: boolean;
    onFocus?: React.FocusEventHandler;
    ref: React.Ref<any>;
}
declare const useTab: (props: UseTabProps) => {
    selected: boolean;
    focusVisible: boolean;
    setFocusVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    disabled: boolean;
    active: boolean;
    getRootProps: (otherHandlers?: Record<string, (event: any) => void> | undefined) => {
        role: string;
        'aria-controls': string | null;
        id: string | null;
        'aria-selected': boolean;
        disabled: boolean;
        tabIndex: number;
        type: "button" | "reset" | "submit" | undefined;
        ref: (instance: HTMLElement | null) => void;
    };
};
export default useTab;

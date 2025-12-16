export interface SectionProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    message: string,
    sendMessage: (message: string) => void;
    changeVisibilitySection?: () => void;
}
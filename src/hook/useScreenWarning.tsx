import { useEffect, useState } from "react";

export function useScreenWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const hasAccepted = sessionStorage.getItem("screen-warning-accepted");

        if (hasAccepted) return;

        if (window.innerWidth > 750) {
            setShowWarning(true);
        }
    }, []);

    const acceptWarning = () => {
        sessionStorage.setItem("screen-warning-accepted", "true");
        setShowWarning(false);
    };

    return { showWarning, acceptWarning };
}

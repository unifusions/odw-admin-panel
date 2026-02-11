import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

export default function LoadingOverlay() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let timeout; // 👈 define timeout inside useEffect

        const handleStart = (event) => {
            if (event.detail.visit.method === "get") {
                timeout = setTimeout(() => {
                    setLoading(true);
                }, 200); // delay to prevent flicker
            }
        };

        const handleFinish = () => {
            clearTimeout(timeout);
            setLoading(false);
        };

        router.on("start", handleStart);
        router.on("finish", handleFinish);
        router.on("error", handleFinish);

        return () => {
            router.off("start", handleStart);
            router.off("finish", handleFinish);
            router.off("error", handleFinish);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
    );
}

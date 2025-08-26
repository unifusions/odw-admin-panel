// useInertiaLoading.js
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

export default function useInertiaLoading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const removeStart = router.on("start", () => setLoading(true));
    const removeFinish = router.on("finish", () => setLoading(false));
    const removeError = router.on("error", () => setLoading(false));

    return () => {
      removeStart();
      removeFinish();
      removeError();
    };
  }, []);

  return loading;
}

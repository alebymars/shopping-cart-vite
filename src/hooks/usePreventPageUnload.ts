import { useEffect } from "react";

const usePreventPageUnload = (shouldPrevent: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (shouldPrevent) {
        const message =
          "Вы можете потерять ваши данные при закрытии страницы. Вы уверены, что хотите уйти?";
        event.preventDefault();
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldPrevent]);
};

export default usePreventPageUnload;

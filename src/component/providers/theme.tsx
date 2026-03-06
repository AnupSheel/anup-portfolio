import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from "next-themes";
import { useEffect } from "react";
import { useTheme } from "next-themes";

function TimeBasedThemeEnforcer() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleThemeBasedOnTime = () => {
      const currentHour = new Date().getHours();
      const isEveningOrNight = currentHour >= 18 || currentHour < 6;

      const storedTheme = localStorage.getItem("theme");

      // If it's past 6 PM and user hasn't explicitly chosen light mode recently
      // Or if no theme is strictly set, default to dark.
      if (isEveningOrNight && storedTheme !== "light") {
        setTheme("dark");
      } else if (!isEveningOrNight && !storedTheme) {
        setTheme("light");
      }
    };

    handleThemeBasedOnTime();

    // Check every minute if the time crosses 6 PM
    const interval = setInterval(handleThemeBasedOnTime, 60 * 1000);
    return () => clearInterval(interval);
  }, [setTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      <TimeBasedThemeEnforcer />
      {children}
    </NextThemeProvider>
  );
}

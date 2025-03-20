import { QueryClient } from "@tanstack/react-query";

export interface Config {
  readonly MODE: string;
  readonly API_URL: string;
}

const getConfigValue = <T>(key: string, defaultValue: T): T => {
  return import.meta.env[key] ? (import.meta.env[key] as T) : defaultValue;
};

export const BaseConfig: Config = {
  MODE: getConfigValue("VITE_MODE", "development"),
  API_URL: getConfigValue("VITE_API_URL", "http://localhost:3000"),
};

export const Config: Readonly<Config> = { ...BaseConfig };

export const queryClient = new QueryClient();

import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.cookie.test",
  appName: "cookie-test",
  webDir: "dist",
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
  },
  server: {
    androidScheme: "https",
  },
};

export default config;

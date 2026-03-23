import { config } from "../config/wdio.base.conf.ts";

config.specs = ["../test/specs/test.chat.ts"];
config.maxInstances = 1;

config.capabilities = {
  chrome: {
    capabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--window-size=1280,1024"],
      },
    },
  },
};
exports.config = config;

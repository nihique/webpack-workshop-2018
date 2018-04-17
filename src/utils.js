import * as stringUtils from "./string-utils";

function warn(message) {
  return console.warn("warn: ", stringUtils.toUpper(message));
}

function info(message) {
  return console.info("info: ", stringUtils.toLower(message));
}

export { warn, info };

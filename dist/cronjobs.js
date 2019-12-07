"use strict";

var _useCases = require("./use-cases");

(async () => {
  await (0, _useCases.fetchHnPosts)();
})();
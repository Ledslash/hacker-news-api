"use strict";

var _app = _interopRequireDefault(require("./app"));

var _normalizePort = _interopRequireDefault(require("normalize-port"));

var _axios = _interopRequireDefault(require("axios"));

var _useCases = require("./use-cases");

var _nodeCron = _interopRequireDefault(require("node-cron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const port = (0, _normalizePort.default)(process && process.env && process.env.PORT || undefined || '8000');

_app.default.listen(port);

_app.default.get('/', async (req, res) => {
  const recordNum = await (0, _useCases.numberOfRecords)();

  if (recordNum == 0) {
    await (0, _useCases.initializeDb)();
    await (0, _useCases.fetchHnPosts)();
  }

  const posts = await (0, _useCases.listPosts)();
  res.status(200).send(posts); //mongoose.connect('mongodb://0.0.0.0:27017/', {useNewUrlParser: true});
});

_app.default.delete('/:postID', async (req, res) => {
  const postID = req.params.postID;
  const result = await (0, _useCases.deletePost)({
    id: postID
  });
  res.status(200).send(result);
});

_nodeCron.default.schedule('* 1 * * *', async () => {
  await (0, _useCases.fetchHnPosts)();
});
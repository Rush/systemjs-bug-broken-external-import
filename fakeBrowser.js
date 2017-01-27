var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();

global.window = MockBrowser.createWindow();
global.document = MockBrowser.createDocument();

global.angular = new Proxy({}, {
  get(target, name) {
    return global.window.angular[name];
  }
});



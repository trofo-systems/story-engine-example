let app = require('story-engine')([require('../walk-on-the-beach-story')]);
app.testStories();
app.testModel(require("../../../models/en-US"));
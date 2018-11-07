let app = require('story-engine')([
    "walk-on-the-beach-story.smd"
]);
app.testStories();
app.testModel(require("../../../models/en-US"));
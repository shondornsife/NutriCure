const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));
app.use(express.urlencoded({ extended: true }));

// routes
const commentRoutes = require("./routes/comment.routes");
commentRoutes(app);

const communityRoutes = require("./routes/community.routes");
communityRoutes(app);

const expertRoutes = require("./routes/expert.routes");
expertRoutes(app);

const nutritionRoutes = require("./routes/nutrition.routes");
nutritionRoutes(app);

const storyRoutes = require("./routes/story.routes");
storyRoutes(app);

const userRoutes = require("./routes/user.routes");
userRoutes(app);

app.listen(port, () => {
    console.log(`🌿 NutriCure Server Listening on port: ${port}`);
});

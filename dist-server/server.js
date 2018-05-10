const express = require("express");
const os = require("os");
const app = express();
let bal = "dsdas";
// Serve static react app build
app.use(express.static("dist-client"));
// Api endpoints
app.get("/api/getUsername", (req, res) => res.send({ username: os.userInfo().username }));
app.listen(5000, () => console.log("Listening on port 5000!"));
//# sourceMappingURL=server.js.map
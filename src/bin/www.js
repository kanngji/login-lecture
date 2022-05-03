"use strict";
//서버를 띄어주는 코드

const app = require("../app");
const PORT = 4000;
app.listen(PORT, () => {
  console.log("서버가동");
});

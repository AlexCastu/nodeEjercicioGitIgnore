const exppress = require("express");
const router = exppress.Router();

router.get("/", (req, resp, next) => {
  resp.redirect("/homeApp/home.html");
});

router.get("/contacto", (req, resp, next) => {
  resp.redirect("/homeApp/contacto.html");
});

router.get("/info", (req, resp, next) => {
  resp.redirect("/homeApp/info.html");
});

router.get("/error", (req, resp, next) => {
  let err = "Se ha forzado un error";
  next(err);
});

module.exports = router;

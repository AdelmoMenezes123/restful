module.exports = {
  user: (app, req, res) => {
    req.assert("nome", "Nome obrigatorio").notEmpty();
    req.assert("email", "E-mail esta invalido").notEmpty().isEmail();

    let errors = req.validationErrors();

    if (errors) {
      app.utils.error.send(errors, req, res);
      return false;
    } else {
      return true;
    }
  },
};

import bcrypt from "bcrypt";

class AuthController {
  static async register(req, res) {
    const payload = req.body;
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);
    return res.json({ payload });
  }
}

export default AuthController;

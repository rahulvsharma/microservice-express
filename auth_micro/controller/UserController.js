import prisma from "../config/db.config.js";

class UserController {
  static async getUser(req, res) {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: { id: id },
      select: { id: true, name: true, email: true },
    });

    return res.json({ user });
  }

  static async getUsers(req, res) {
    try {
      const { userIds } = req.body;
      const users = await prisma.user.findMany({
        where: {
          id: { in: userIds },
        },
        select: { id: true, name: true, email: true },
      });
      return res.json({ users });
    } catch {
      return res
        .status(500)
        .json({ message: "Something went wrong in getUsers" });
    }
  }
}

export default UserController;

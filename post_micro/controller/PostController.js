import axios from "axios";
import prisma from "../config/db.config.js";

class PostController {
  static async index(req, res) {
    try {
      const posts = await prisma.post.findMany({});

      let userIds = [];
      posts.forEach((item) => {
        userIds.push(item.user_id);
      });

      //   let postWithUserIds = await Promise.all(
      //     posts.map(async (post) => {
      //       const res = await axios.get(
      //         `${process.env.AUTH_MICRO_URL}/api/getUser/${post.user_id}`
      //       );
      //       return {
      //         ...post,
      //         ...res.data,
      //       };
      //     })
      //   );

      const response = await axios.post(
        `${process.env.AUTH_MICRO_URL}/api/getUsers`,
        userIds
      );
      const users = response.data.users;
      //   console.log(users);

      let postWithUsers = await Promise.all(
        posts.map((post) => {
          const user = users[post.user_id];
          return {
            ...post,
            user,
          };
        })
      );
      return res.json({ postWithUsers, userIds });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong in post index." });
    }
  }

  static async store(req, res) {
    try {
      const authUser = req.user;
      const { title, content } = req.body;
      const post = await prisma.post.create({
        data: {
          user_id: authUser.id,
          title,
          content,
        },
      });
      return res.json({ message: "post created successfully", post });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong." });
    }
  }
}
export default PostController;

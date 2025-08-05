import { Router } from "express";
const router = Router();

router.get("/", (_, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

export default router;
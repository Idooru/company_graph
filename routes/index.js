import express from "express";
import getPythonData from "../services/get-python-data.js";

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const [firstList, secondList, thirdList] =
    await getPythonData("./python/data.py");
  res.render("index", { firstList, secondList, thirdList });
});

export default router;

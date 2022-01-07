import express from "express";
import {
  addUser,
  showUser,
  updatePassword,
  updateUser,
  addDuyuru,
  addBildirim,
  addGider, 
  deleteUser,
  deleteGider,
  deleteDuyuru,
  deleteBildirim,
  addYazilacak,
  showYazilacak,
  addAidat,
  getAidat,
  updateAidat,
  showGider,
  showBildirim,
  showDuyuru,
} from "../controller/user.js";

const router = express.Router();

router.post("/updatePassword", updatePassword);
router.post("/addUser", addUser);
router.post("/showUser", showUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/updateUser", updateUser);
router.get("/getAidat/:id", getAidat);
router.post("/addAidat", addAidat);
router.post("/updateAidat", updateAidat);
router.post("/addDuyuru", addDuyuru);
router.delete("/deleteDuyuru/:id", deleteDuyuru);
router.delete("/deleteBildirim/:id", deleteBildirim);
router.post("/addGider", addGider);
router.delete("/deleteGider/:id", deleteGider);
router.get("/showGider/:id", showGider);
router.get("/showDuyuru/:id", showDuyuru);
router.get("/showBildirim/:id", showBildirim);
router.post("/addYazilacak", addYazilacak);
router.get("/showYazilacak/:id", showYazilacak);
router.post("/addBildirim", addBildirim);
export default router;

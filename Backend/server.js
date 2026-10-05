import connectToMongo from "./dbConnection.js";
import express from "express";
import axios from "axios";
import userRoutes from "./routes/userRoutes.js";
import promotionRoutes from "./routes/promotionRoute.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminDashboardRoute from "./routes/adminDashboardRoutes.js";
import adminRoute from "./routes/adminRoutes.js";
import contactUsRoutes from "./routes/contactUsRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import cors from "cors";
import userAuth from "./middleware/userAuth.js";
import { requiredEnv } from "./config/env.js";
import { generateUploadURL } from "./services/s3Service.js";
const app = express();   
const port = 3333;
const frontendOrigin = process.env.FRONTEND_ORIGIN?.trim();
if (!frontendOrigin && process.env.NODE_ENV === "production") {
  throw new Error("FRONTEND_ORIGIN is required in production");
}

const allowedUploadTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
]);



connectToMongo();                 //connecting to MongoDb database 
app.use(cors({ origin: frontendOrigin || "http://localhost:3000" }));
app.use(express.json());
app.get('/s3Url', userAuth, async (req, res) => {
  const contentType = req.query.contentType;
  if (typeof contentType !== "string" || !allowedUploadTypes.has(contentType)) {
    return res.status(400).json({ message: "Unsupported upload type" });
  }
  try {
    const url = await generateUploadURL(contentType);
    res.send({ url });
  } catch (error) {
    console.error("Could not sign S3 upload", error.code || "unknown");
    res.status(500).send('Internal Server Error');
  }
});
app.post('/chatbot/answer', userAuth, async (req, res) => {
  const question = req.body?.question;
  if (typeof question !== "string" || !question.trim() || question.length > 2000) {
    return res.status(400).json({ message: "Question must be between 1 and 2000 characters" });
  }

  try {
    const model = requiredEnv("GEMINI_MODEL");
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      { contents: [{ parts: [{ text: question.trim() }] }] },
      {
        headers: { "x-goog-api-key": requiredEnv("GEMINI_API_KEY") },
        timeout: 20000,
      }
    );
    const answer = response.data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("\n")
      .trim();
    if (!answer) {
      return res.status(502).json({ message: "No answer was returned" });
    }
    res.json({ answer });
  } catch (error) {
    console.error("Gemini request failed", error.response?.status || error.code || "unknown");
    res.status(502).json({ message: "The chatbot is temporarily unavailable" });
  }
});
app.use('/hospital',adminRoute);
app.use('/hospital',userRoutes);

app.use('/promotion',promotionRoutes);
app.use('/appointment',appointmentRoutes);
app.use('/adminDashboard',adminDashboardRoute);
app.use('/hospital',contactUsRoutes);
app.use('/prescription',prescriptionRoutes);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



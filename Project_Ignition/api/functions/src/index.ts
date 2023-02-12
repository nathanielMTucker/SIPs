// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();
const app = express();

app.use(cors({origin:true}))

app.get("/", async (req: any, res: any)=>{
  const snapshot = await db.collection("users").get();

  const users: any[] = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    users.push({id, ...data});
  });

  res.status(200).send(JSON.stringify(users));
});

app.get("/:id", async (req: any, res: any)=>{
  const snapshot = await db
      .collection("users")
      .doc(req.params.id)
      .get();

  const userID = snapshot.id;
  const userData = snapshot.data;

  res.status(200).send(JSON.stringify({id: userID, ...userData}));
});

app.post("/", async (req: { body: any; }, res: any)=>{
  const user = req.body;

  await db.collection("users").add(user);

  res.status(201).send();
});

export const user = functions.https.onRequest(app);

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

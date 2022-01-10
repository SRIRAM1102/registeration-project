import express, { response } from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//Mongodb Connect
export async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  return await client.connect();
}

//Post Data
app.post("/data", async (req, res) => {
  const { fullname, mobile, jobtype, location, avatar, emailId, dob } =
    req.body;
  const client = await createConnection();
  const result = await client.db("registeration").collection("user").insertOne({
    fullname: fullname,
    mobile: mobile,
    emailId: emailId,
    jobtype: jobtype,
    location: location,
    avatar: avatar,
    dob: dob,
  });

  res.send(result);
});

//Get Data
app.get("/getdata", async (req, res) => {
  const client = await createConnection();
  const value = await client
    .db("registeration")
    .collection("user")
    .find({})
    .toArray();

  res.send(value);
});

//Delete Data
app.delete("/deldata/:id", async (req, res) => {
  const id = req.params.id;

  const client = await createConnection();

  const result = await client
    .db("registeration")
    .collection("user")
    .deleteOne({ _id: ObjectId(id) });
});

//Update Data
app.put("/editdata", async (req, res) => {
  const { id, fullname, emailId, mobile, dob, jobtype } = req.body;

  const client = await createConnection();
  const result = await client
    .db("registeration")
    .collection("user")
    .updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          fullname: fullname,
          emailId: emailId,
          mobile: mobile,
          dob: dob,
          jobtype: jobtype,
        },
      }
    );
});

app.get("/get", (req, res) => {
  res.send("working fine");
});

app.listen(PORT, () => console.log("sev started"));

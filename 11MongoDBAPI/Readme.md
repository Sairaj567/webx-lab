node server.js

curl -X POST http://localhost:5000/users \
-H "Content-Type: application/json" \
-d '{"name": "Alice", "email": "alice@example.com", "age": 25}'

curl http://localhost:5000/users

Sure! Let's build a **simple TypeScript REST API** using **Node.js**, **Express**, and **MongoDB** (with Mongoose). This example includes basic CRUD operations for a `User` model.

---

### 🧱 Stack Overview:

- **TypeScript**: for static typing.
- **Express.js**: web framework.
- **MongoDB**: database.
- **Mongoose**: ODM to interact with MongoDB.
- **ts-node-dev**: to run and hot-reload TypeScript code during development.

---

### 🛠️ Step-by-Step Setup

#### 1. **Initialize project**

```bash
mkdir ts-rest-api
cd ts-rest-api
npm init -y
```

#### 2. **Install dependencies**

```bash
npm install express mongoose dotenv
npm install -D typescript ts-node-dev @types/express @types/node
```

#### 3. **Configure TypeScript**

```bash
npx tsc --init
```

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

#### 4. **Project Structure**

```
ts-rest-api/
│
├── src/
│   ├── models/
│   │   └── user.model.ts
│   ├── routes/
│   │   └── user.routes.ts
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── config/
│   │   └── db.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── tsconfig.json
├── package.json
```

---

#### 5. **MongoDB Config (`src/config/db.ts`)**

```ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;
```

---

#### 6. **User Model (`src/models/user.model.ts`)**

```ts
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model<IUser>("User", UserSchema);
```

---

#### 7. **User Controller (`src/controllers/user.controller.ts`)**

```ts
import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsers = async (_: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "User creation failed", details: err });
  }
};
```

---

#### 8. **User Routes (`src/routes/user.routes.ts`)**

```ts
import express from "express";
import { getUsers, createUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;
```

---

#### 9. **Express App (`src/app.ts`)**

```ts
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

export default app;
```

---

#### 10. **Server (`src/server.ts`)**

```ts
import app from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

#### 11. **Environment File (`.env`)**

```env
MONGO_URI=mongodb://localhost:27017/ts-rest-api
PORT=5000
```

---

#### 12. **Scripts in `package.json`**

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

### ✅ Running the Project

Start MongoDB, then:

```bash
npm run dev
```

You now have a TypeScript REST API with `/api/users` supporting:

- `GET /api/users` - list users
- `POST /api/users` - create user

---

Want to add authentication, pagination, or validation next?

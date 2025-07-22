import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET }from '@repo/common/config';
import { middleware } from './middleware';
import {prismaClient} from '@repo/db/client'
import { signinSchema, signupSchema, roomSchema } from '@repo/common/types'


const app = express();
app.use(express.json());

app.post("/signup", async(req, res) => {
  const body = req.body
  const parsedData = signupSchema.safeParse(body);
  if (!parsedData.success) {
    return res.json({
      "message":"Incorrect inputs"
    });
  }
  try {
        const user = await prismaClient.user.create({
            data:{
              username: parsedData.data.username,
              email: parsedData.data.email,
              password: parsedData.data.password,
              name: parsedData.data.name
            }
        })
        res.json({
            userId: user.id
        })
  } catch(e) {
      res.status(411).json({
          message: "User already exists with this username"
        })
  }
})

app.post("/signin", async(req, res) => {
  const parsedData = signinSchema.safeParse(req.body)
  if (!parsedData.success) {
    return res.json({
      "message":"Incorrect inputs"
    });
  }
  const user = await prismaClient.user.findFirst({
    where:{
      username: parsedData.data.username,
      password: parsedData.data.password
    }
  })

  if (!user){
    return res.json({
      "message":"Incorrect inputs"
    })
  }

  const token = jwt.sign({
    userId: user?.id
  }, JWT_SECRET)

  res.json({
    token: token
  })
})

app.post("/room", middleware, async(req, res) => {
  const parsedData = roomSchema.safeParse(req.body)
  if (!parsedData.success) {
    return res.json({
      "message":"Incorrect inputs"
    });
  }
  //@ts-ignore
  const userId = req.userId;

  const room = await prismaClient.room.create({
    data:{
      slug:parsedData.data.name,
      adminId: userId
    }
  })

  res.json({
    roomId : room.id
  })
})

app.listen(3001)
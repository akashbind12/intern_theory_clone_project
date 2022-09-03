const express = require('express')

const router = express.Router()
const classroomSchema = require('../Schema/classroomSchema')

router.get('/', async (req, res) => {
  try {
    const data = await classroomSchema.find({})

   return res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router

[
  {
      "_id": "624421bcaa0dbaf0424da2d6",
      "images": "https://assets.interntheory.com/courses/banner/1573118304.png",
      "title": "Offline Digital Marketing Course",
      "description": "Learn the art of digital marketing. Sign up for this offline ...",
      "strikethrough_Price": "₹ 19999",
      "Price": 9999,
      "know": "KNOW MORE",
      "emi": "EMI Starting at ₹ 572/month",
      "incart": 0
  },
  {
      "_id": "624421bcaa0dbaf0424da2d7",
      "images": "https://assets.interntheory.com/courses/banner/1573120159.png",
      "title": "Offline Stock Market Course",
      "description": "Learn how to trade and invest in stock markets. Enroll for t ...",
      "strikethrough_Price": "₹ 19999",
      "Price": 9999,
      "know": "KNOW MORE",
      "emi": "EMI Starting at ₹ 572/month",
      "incart": 0
  },
  {
      "_id": "624421bcaa0dbaf0424da2d8",
      "images": "https://assets.interntheory.com/courses/banner/1573120767.png",
      "title": "Offline Tally + GST Course",
      "description": "Sign up for this offline tally and GST course and learn how ...",
      "strikethrough_Price": "₹ 15999",
      "Price": 7999,
      "know": "KNOW MORE",
      "emi": "EMI Starting at ₹ 458/month",
      "incart": 0
  },
  {
      "_id": "624421bcaa0dbaf0424da2d9",
      "images": "https://assets.interntheory.com/courses/banner/1573120508.png",
      "title": "Offline Advanced Excel Course",
      "description": "Master MS Excel. Take the offline ms excel course and learn ...",
      "strikethrough_Price": "₹ 19999",
      "Price": 5999,
      "know": "KNOW MORE",
      "emi": "EMI Starting at ₹ 343/month",
      "incart": 0
  }
]

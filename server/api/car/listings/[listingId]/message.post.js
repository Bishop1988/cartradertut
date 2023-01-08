import Joi from "joi"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    phone: Joi.string().length(11).pattern(/(07\d{9}|447\d{9})$/).required(),
    message: Joi.string().min(20).required(),
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { listingId } = event.context.params

    const { error } = await schema.validate(body)

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const {
        name,
        email,
        phone,
        message
    } = body

    return prisma.message.create({
        data: {
            name,
            email,
            phone,
            message,
            listingId: parseInt(listingId)
        }
    })
})

// export default defineEventHandler(async (event) => {
//     return "post"
// })
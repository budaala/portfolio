import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' })
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: email,
            to: process.env.MAIL_USER,
            subject: `PORTFOLIO: New message from ${name}`,
            text: message,
        })

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
})

app.get('/', (req, res) => {
    res.send('Contact API is running.')
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

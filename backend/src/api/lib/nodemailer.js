import nodemailer from "nodemailer"
import env from "../../infrastructure/env.js"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS
    }
})


export const sendOtpMail = async(email,otp)=>{
    try {
        const config = {
            from: env.EMAIL_USER,
            to:email,
            subject:"OTP for blog-app registration",
            html:`${otp}
            `
        }
        await transporter.sendMail(config)
    } catch (error) {
        console.log("error while sending mail",error)
        return error
    }
}
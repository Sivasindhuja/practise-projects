require("dotenv").config();
const port=3000;

const express = require("express");
const twilio = require("twilio");
const app = express();

app.use(express.json());

const axios = require("axios");//for asynchronous http requests

const accountSid = process.env.TWILIO_ACCOUNT_SID;  
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const weatherApiKey = process.env.WEATHER_API_KEY;

const client = twilio(accountSid, authToken);

async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
        const { temp, humidity } = response.data.main;
        const description = response.data.weather[0].description;
        
        return `Weather in ${city}: ${temp}°C, ${description}, Humidity: ${humidity}%`;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return "Unable to fetch weather data.";
    }
}


app.post("/send-weather", async (req, res) => {
   
    const { phoneNumber, city } = req.body;

    if (!phoneNumber || !city) {
        return res.status(400).json({ success: false, message: "Phone number and city are required." });
    }

    try {
       
        const weatherMessage = await getWeather(city);

       
        const sms = await client.messages.create({
            body: weatherMessage,
            from: twilioPhoneNumber,
            to: phoneNumber,
        });

        console.log(`Weather SMS sent to ${phoneNumber}: ${weatherMessage}`);

        res.json({ success: true, message: "Weather SMS sent successfully!", sid: sms.sid });
    } catch (error) {
        console.error("Error sending weather SMS:", error);
        res.status(500).json({ success: false, message: "Failed to send weather SMS." });
    }
});


app.listen(port, () => console.log(`Server is running on port ${port}`));

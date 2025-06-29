import dotenv from 'dotenv'
import path from 'path'


dotenv.config({ path: path.join(process.cwd(), ".env") })

export default {
     node_env: process.env.NODE_ENV,
     port: process.env.PORT,
     dataBase_url: process.env.MONGO_URI,
     salt_round: process.env.SALT_ROUND,
     jwt_secret: process.env.JWT_SECRET,
}
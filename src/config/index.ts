import  dotenv from 'dotenv'
dotenv.config()

export default{
    node_env:process.env.NODE_ENV,
    db_url: process.env.DB_URL,
    port: process.env.PORT,
    salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expire_in:process.env.JWT_ACCESS_EXPIRE_IN,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expire_in:process.env.JWT_REFRESH_EXPIRE_IN

}
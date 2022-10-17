import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: 'us-east-1',
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: 'udapgramimg1',
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

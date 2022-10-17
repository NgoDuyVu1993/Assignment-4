import AWS = require("aws-sdk");
import { config } from "./config/config";

//Credentials are auto set according to the documentation https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html and the default profile is "Default anyway"



// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  const s3 = new AWS.S3({
  
    region: config.aws_region,
    params: { Bucket: config.aws_media_bucket, ContentType: "image/png", Key: key },
    
  });

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    ContentType: "image/png",
    Key: key,
    
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string, callback: any) {
  const signedUrlExpireSeconds = 60 * 5;
  const s3 = new AWS.S3({
  
    region: config.aws_region,
    params: { Bucket: config.aws_media_bucket, ContentType: "image/png", Key: key,Expires : signedUrlExpireSeconds },
    
  });

  s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    ContentType: "image/png",
    Key: key,Expires : signedUrlExpireSeconds
  }, (err : any, url : any)=>
  {
    console.log("Signed Url ", url);
    callback(url);
  
  });

  
}

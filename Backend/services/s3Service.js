import AWS from "aws-sdk";
import { randomBytes } from "node:crypto";
import { requiredEnv } from "../config/env.js";

const bucket = requiredEnv("AWS_S3_BUCKET");
const s3 = new AWS.S3({
  region: requiredEnv("AWS_REGION"),
  accessKeyId: requiredEnv("AWS_ACCESS_KEY_ID"),
  secretAccessKey: requiredEnv("AWS_SECRET_ACCESS_KEY"),
  signatureVersion: "v4",
});

export function generateUploadURL(contentType) {
  return s3.getSignedUrlPromise("putObject", {
    Bucket: bucket,
    Key: randomBytes(16).toString("hex"),
    ContentType: contentType,
    Expires: 900,
  });
}

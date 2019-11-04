require('dotenv').config()

// Require AWS SDK
const AWS = require('aws-sdk')
// Set AWS region
AWS.config.update({ region: 'us-east-1' })
// Create S3 Object instance
const s3 = new AWS.S3()

const mime = require('mime-types')

// Define bucket based on environment variable
const bucketName = process.env.BUCKET_NAME

module.exports = function () {
  const params = {
    Bucket: bucketName,
    Key: 'image1',
    Body: fileData,
    ACL: 'public-read',
    ContentType: mime.lookup(filePath)
  }

  // Upload to s3
  s3.upload(params, (err, s3Data) => {
    if (err) throw err
    console.log(s3Data)
  })
}
// Create params object for s3 upload

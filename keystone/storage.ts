import { StorageConfig } from '@keystone-6/core/types'

const s3Storage: StorageConfig = {
  kind: 's3',
  type: 'file',
  bucketName: process.env.S3_BUCKET_NAME as string,
  region: process.env.S3_REGION as string,
  accessKeyId: process.env.S3_SECRET_ACCESS_KEY as string,
  secretAccessKey: process.env.S3_ACCESS_KEY_ID as string,
  endpoint: process.env.S3_ENDPOINT as string,
  signed: { expiry: 5000 },
}

export const storage: Record<string, StorageConfig> = {
  s3Files: {
    ...s3Storage,
    type: 'file',
  },
  s3Images: {
    ...s3Storage,
    type: 'image',
  },
}

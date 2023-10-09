import { ServerConfig, BaseKeystoneTypeInfo } from '@keystone-6/core/types'

export const server: ServerConfig<BaseKeystoneTypeInfo> = {
  port: Number(process.env.PORT) || 8000,
  cors: true,
  maxFileSize: 200 * 1024 * 1024,
  healthCheck: true,
}

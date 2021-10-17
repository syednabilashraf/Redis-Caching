const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  redis_host: process.env.REDIS_HOST || 'redis-17290.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
  redis_port: process.env.REDIS_PORT || '17290',
  redis_password: process.env.REDIS_PASSWORD || 'NDceL9BaPNaTuXpZKmiuyURaMWClvyfh',
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config

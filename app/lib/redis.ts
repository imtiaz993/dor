import { createClient } from "redis";

const redisClient = createClient({
  password: 'YaLRFE8tClCusGoU2Hadpe6P9x4RfAwC',
    socket: {
        host: 'redis-10793.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10793
    }
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

export { redisClient };

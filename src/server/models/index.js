export const dbConfig = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/isomorphic-todos',
    port: process.env.PORT || 3000
};

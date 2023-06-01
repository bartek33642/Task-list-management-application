const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://33642:Matematyka.1@task-management.vv9kity.mongodb.net/?retryWrites=true&w=majority',
    JwtSecret: process.env.JWT_SECRET || 'secret'
   };
   
export default config;

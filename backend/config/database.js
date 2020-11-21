module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb+srv://gingermostly:OsrkPON1ZKuwfcE5@cluster0-vuygg.mongodb.net/wrongcar?retryWrites=true&w=majority"
      },
      options: {
        ssl: true
      },
    },
  },
});

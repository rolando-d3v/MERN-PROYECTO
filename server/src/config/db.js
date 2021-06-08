import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
      // `mongodb+srv://${config.db.user}:${config.db.pass}@cafe.8wspk.mongodb.net/${config.db.name}`,
      // `mongodb+srv://@cafe.8wspk.mongodb.net/${config.db.name}`,
    const db = await mongoose.connect(`mongodb://localhost/${config.db_name}`, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,

      //forma 2
      // dbName: config.db.name,
      // user: config.db.user,
      // pass: config.db.pass
    });

    console.log(`🔥  🚀  DB ${db.connection.name} ➡️ connected  😃  ✔️`);
  } catch (err) {
    console.log({ msn: "Error db", err });
  }
})();


//   mongodb+srv://abraham:jIjRdwT5uLjmCu2L@cafe.8wspk.mongodb.net/cafe

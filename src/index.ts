import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'derrit',
    type: 'postgresql',
    debug: !__prod__,
  }); 
}



console.log("hello world");
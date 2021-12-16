// const WorkBench = require("./classes/Database");
import { WorkBench } from './classes/Database';

const conectBank = WorkBench.factory({
   typeBank: WorkBench.TYPE_SQLSERVER,
   password: "root123",
   user: "root",
   ip: WorkBench.LOCALE
});
console.log(conectBank);
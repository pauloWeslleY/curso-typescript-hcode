import { IWorkBench } from "../interfaces/IWorkbench";

export class WorkBench {
   static LOCALE = "127.0.0.1";
   static TYPE_MYSQL = "MySQL";
   static TYPE_SQLSERVER = "SQL Server";

   constructor(
      private ip: string,
      private user: string,
      private password: string,
      private typeBank: string
   ) {}

   static factory(params: IWorkBench) {
      if (![
         WorkBench.TYPE_MYSQL,
         WorkBench.TYPE_SQLSERVER
      ].includes(params.typeBank)) {
         throw new Error("Type Bank incorrect");
      }

      return new WorkBench(
         params.ip,
         params.user,
         params.password,
         params.typeBank
      );
   }
}
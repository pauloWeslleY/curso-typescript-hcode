import MyUser from "../interfaces/MyUser";

export default abstract class Notifications {
   abstract send(user: MyUser): Boolean;
}
import Realm from "realm";
import  {TaskSchema} from "./schemas/TaskSchema";

export const getRealm = async() => await Realm.open({
    path: "tpf-app",
    schema: [TaskSchema],
    deleteRealmIfMigrationNeeded: true
});
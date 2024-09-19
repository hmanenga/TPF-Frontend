import Realm from 'realm';

export interface ITask {
    id: number;
    title: string;
    description?: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high';
}

class Task extends Realm.Object<Task> implements ITask {
    id!: number;
    title!: string;
    description?: string;
    dueDate!: Date;
    priority!: 'low' | 'medium' | 'high';

    static schema: Realm.ObjectSchema = {
        name: 'Task',
        properties: {
            id: 'int',
            title: 'string',
            description: 'string?',
            dueDate: 'date',
            priority: 'string',
        },
        primaryKey: 'id',
    };
}

export default Task;

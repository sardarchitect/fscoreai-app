import {
    User,
    Project,
    Task
} from './definitions';

import {
    users, projects, tasks
} from './placeholder-data'

export async function fetchProjects() {
    try{
        const data = {users, projects, tasks}
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects')
        
    }
}
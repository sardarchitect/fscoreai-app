import { sql } from '@vercel/postgres';
import {
    User,
    Project,
    Task
} from './definitions';

export async function fetchProjects() {
    try{
        const data = await sql<Project>`SELECT * FROM projects`
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project data')
    }
}

export async function fetchTasksByProjectId(project_id:String) {
    try{
        const data = await sql<Task>`
            SELECT * 
            FROM tasks 
            WHERE tasks.project_id = ${project_id};`
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch tasks')
    }
}



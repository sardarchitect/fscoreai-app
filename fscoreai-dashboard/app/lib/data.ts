import { unstable_noStore as noStore} from 'next/cache';
import {
    User,
    Project,
    Task
} from './definitions';
import { sql } from '@vercel/postgres';

export async function fetchProjects() {
    noStore()
    try{
        const data = await sql<Project>`SELECT * FROM projects`;
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects')
        
    }
}
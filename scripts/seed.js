const {db} = require('@vercel/postgres')
const {
    users,
    projects,
    tasks
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
  
      console.log(`Created "users" table`);
  
      // Insert data into the "users" table
      const insertedUsers = await Promise.all(
        users.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedUsers.length} users`);
  
      return {
        createTable,
        users: insertedUsers,
      };
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
  }
  
  async function seedProjects(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "projects" table if it doesn't exist
      const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      name TEXT NOT NULL
    );
  `;
  
      console.log(`Created "projects" table`);
  
      // Insert data into the "projects" table
      const insertedProjects = await Promise.all(
        projects.map(
          (project) => client.sql`
          INSERT INTO projects (id, customer_id, name)
          VALUES (${project.id}, ${project.customer_id}, ${project.name})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
      );
  
      console.log(`Seeded ${insertedProjects.length} projects`);
  
      return {
        createTable,
        projects: insertedProjects,
      };
    } catch (error) {
      console.error('Error seeding projects:', error);
      throw error;
    }
  }

  async function seedTasks(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "tasks" table if it doesn't exist
      const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS tasks (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      project_id UUID NOT NULL,
      name TEXT NOT NULL
    );
  `;
  
      console.log(`Created "tasks" table`);
  
      // Insert data into the "projects" table
      const insertedTasks = await Promise.all(
        tasks.map(
          (task) => client.sql`
          INSERT INTO tasks (project_id, name)
          VALUES (${task.project_id}, ${task.name})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
      );
  
      console.log(`Seeded ${insertedTasks.length} tasks`);
  
      return {
        createTable,
        tasks: insertedTasks,
      };
    } catch (error) {
      console.error('Error seeding tasks:', error);
      throw error;
    }
  }

  async function main(){
    const client = await db.connect();
    await seedUsers(client);
    await seedProjects(client);
    await seedTasks(client);

    await client.end();
  }
  main().catch((err) => {
    console.error('An error occurred while attempting to seed the database', err);
  })
import { z } from 'zod';

const FormSchema = z.object({
    id: z.string(),
    customer_id: z.string(),
    name: z.string()
})

const CreateProject = FormSchema.omit({id:true})

export type State = {
    errors?: {
      customerId?: string[];
      name?: string[];
    };
    message?: string | null;
  };

export async function createProject(prevState: State, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateProject.safeParse({
      name: formData.get('name'),
      customer_id: formData.get('customer_id')
    });
  
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Project.',
      };
    }
  
    // Prepare data for insertion into the database
    const { customer_id, name } = validatedFields.data;
  
    // Insert data into the database
    try {
      await sql`
        INSERT INTO projects (customer_id, name)
        VALUES (${customer_id}, ${name})
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Project.',
      };
    }
  
    // Revalidate the cache for the invoices page and redirect the user.
    // revalidatePath('/dashboard/invoices');
    // redirect('/dashboard/invoices');
  }
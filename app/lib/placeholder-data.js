const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const projects = [
  {
    id: '3958dc9e-712f-4374-85e9-fec4b6a6442a',
    customer_id: users[0].id,
    name: 'Jose Melo Design',
  },
  {
    id: '3958dc9e-712f-4277-85e9-fec4b6a6442b',
    customer_id: users[0].id,
    name: 'Switchpoint Redesign',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec486a6442c',
    customer_id: users[0].id,
    name: 'SFHMC',
  },
];

const tasks = [
  {
    project_id: projects[0].id,
    name: 'Stair railing details',
  },
  {
    project_id: projects[0].id,
    name: 'Roofing details',
  },
  {
    project_id: projects[0].id,
    name: 'ADA Bathroom Details',
  },
  {
    project_id: projects[1].id,
    name: 'Parking Study',
  },
  {
    project_id: projects[1].id,
    name: 'Rework - Curtain wall standards',
  },
  {
    project_id: projects[2].id,
    name: 'Missing columns',
  },
]

module.exports = {
  users,
  projects,
  tasks,
};
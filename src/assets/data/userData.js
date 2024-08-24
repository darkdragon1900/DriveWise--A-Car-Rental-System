const user = {
    id: 1,
    name: 'Shivam Gosavi',
    email: 'shivamgosavi@gmail.com',
    password: 'password123' 
  };
  
 
  localStorage.setItem('user', JSON.stringify(user));

  export default user;
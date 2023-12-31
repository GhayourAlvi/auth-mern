import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
           <h1 className="text-3xl text-center font-semibold my-10">Sign Up</h1>
           <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" id="firstName" className="bg-slate-100 p-3 rounded-lg shadow appearance-none border focus:outline-none focus:shadow-outline"  onChange={handleChange}/>
            <input type="text" placeholder="Last Name" id="lastName" className="bg-slate-100 p-3 rounded-lg shadow appearance-none border focus:outline-none focus:shadow-outline"  onChange={handleChange}/>
            <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg shadow appearance-none border focus:outline-none focus:shadow-outline"  onChange={handleChange}/>
            <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg shadow appearance-none border focus:outline-none focus:shadow-outline"  onChange={handleChange}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase" disabled={loading}>  {loading ? 'Loading...' : 'Sign Up'}</button>
            <div className="flex gap-2 mt-2">
              <p>Have an account?</p>
              <Link to={"/login"}>
              <span className="text-blue-500">Login</span>
              </Link>
            </div>
           </form>
           <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}

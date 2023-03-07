import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../../redux/authSlice';
import validateLogin from '../../validators/validate-login';

export default function LoginAdminForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin({ email: email, password: password });
      if (result) {
        setError(result[0].message);
      } else {
        dispatch(loginAPI(email, password));
        setError('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-black/60  max-w-xl mt-28 mb-10 w-[350px} p-[60px]">
        <form>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-white text-3xl font-bold ml-20"
            >
              Admin
            </label>
            <br />
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-white text-2xl font-semibold"
            >
              Sign In
            </label>
            <input
              type="email"
              className="form-control  block   w-full  px-3   py-1.5   text-base   font-normal   text-gray-300   bg-gray-700 bg-clip-padding  border border-solid border-gray-300  rounded   m-0"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="form-control block   w-full   px-3    py-1.5  text-b  font-normal  text-gray-300   bg-gray-700 bg-clip-padding   border border-solid border-gray-300  rounded   m-0"
              id="exampleInputPassword2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-1">
            <button
              type="submit"
              className="w-full  px-6   py-2.5  bg-red-600   text-white   font-medium   text-lg   leading-tight   rounded   shadow-md   transition   duration-150   ease-in-out mt-4"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
          <div className="flex justify-between mx-2 mb-6 form-group form-check">
            <div className="p">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-400 mr-5 text-xs"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                href="#!"
                className="text-gray-400 text-xs  transition duration-200 ease-in-out ml-4"
              >
                Need help?
              </a>
            </div>
          </div>

          <p className="text-gray-500 text-sm  mt-15 text-center">
            New to Netflix?{' '}
            <a
              href="#!"
              className="text-gray-300 no-underline hover:underline text-sm font-medium transition duration-200 ease-in-out"
            >
              Sign Up now.
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

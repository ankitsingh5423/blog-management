const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};


export default SignUp;


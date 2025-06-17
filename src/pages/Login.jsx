export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-5">Welcome Back</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="accent-purple-600" />
              Remember me
            </label>
            <a href="#" className="text-blue-700 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account? <a href="#" className="text-yellow-500 font-medium hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

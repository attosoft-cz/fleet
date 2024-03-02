const SignInForm = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
        <div className="mb-4 flex justify-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-12" />
        </div>
        <h2 className="mb-8 text-center text-2xl font-bold">
          Sign in to your account
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
            <a
              href="#"
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;

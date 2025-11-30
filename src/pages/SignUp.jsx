import { useNavigate } from "react-router-dom";

const SignupCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
      relative bg-white/10 backdrop-blur-xl 
      border border-white/20 
      text-gray-200 max-w-md w-full mx-4 
      p-6 md:p-8 rounded-2xl shadow-xl
      transition-all duration-300
      hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
    "
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent pointer-events-none" />

      <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-center text-white drop-shadow-lg">
        Create your account
      </h2>

      <form className="relative z-10">
        <input
          id="name"
          className="w-full bg-white/10 border border-white/20 my-2.5 sm:my-3
          backdrop-blur-md placeholder-gray-300
          outline-none rounded-full py-2.5 sm:py-3 px-4 sm:px-5 text-sm sm:text-base text-white
          focus:ring-2 focus:ring-indigo-400 transition"
          type="text"
          placeholder="Full name"
          required
        />

        <input
          id="email"
          className="w-full bg-white/10 border border-white/20 my-2.5 sm:my-3
          backdrop-blur-md placeholder-gray-300
          outline-none rounded-full py-2.5 sm:py-3 px-4 sm:px-5 text-sm sm:text-base text-white
          focus:ring-2 focus:ring-indigo-400 transition"
          type="email"
          placeholder="Email address"
          required
        />

        <input
          id="password"
          className="w-full bg-white/10 border border-white/20 my-2.5 sm:my-3
          backdrop-blur-md placeholder-gray-300
          outline-none rounded-full py-2.5 sm:py-3 px-4 sm:px-5 text-sm sm:text-base text-white
          focus:ring-2 focus:ring-indigo-400 transition"
          type="password"
          placeholder="Create password"
          required
        />

        <button
          type="submit"
          className="
            w-full mt-4 sm:mt-5 bg-linear-to-r from-indigo-500 to-purple-600 
            py-2.5 sm:py-3 rounded-full text-sm sm:text-base text-white font-medium
            shadow-lg hover:shadow-indigo-600/40 transition-all cursor-pointer"
        >
          Sign Up
        </button>

        <p className="text-center mt-4 sm:mt-5 text-xs sm:text-sm text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-300 cursor-pointer hover:text-indigo-400 underline"
          >
            Login
          </span>
        </p>

        {/* Social buttons */}
        <button
          type="button"
          className="w-full flex items-center gap-2 justify-center mt-4 sm:mt-5
          bg-black/40 backdrop-blur-md border border-white/20
          py-2.5 sm:py-3 rounded-full text-xs sm:text-sm text-white hover:bg-black/60 transition cursor-pointer"
        >
          <img
            className="h-4 w-4 "
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
            alt="appleLogo"
          />
          Sign up with Apple
        </button>

        <button
          type="button"
          className="w-full flex items-center gap-2 justify-center my-3 sm:my-4
          bg-white/80 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm text-gray-900
          hover:bg-white transition cursor-pointer"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="googleFavicon"
          />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

const Signup = () => {
  return (
    <div
      className="
      min-h-screen bg-[radial-gradient(circle_at_top,#1e1b4b,#000)]
      flex items-center justify-center
      pt-24 sm:pt-28 md:pt-20
      px-4 sm:px-6
    "
    >
      <SignupCard />
    </div>
  );
};

export default Signup;

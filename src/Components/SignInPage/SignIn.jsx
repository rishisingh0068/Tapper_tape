import { useState } from "react";

export default function SignIn() {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-6 bg-gray-900 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 text-3xl font-bold">🔒</span>
                    </div>
                    <h2 className="text-xl font-semibold mt-4">
                        {isSignIn ? "Sign In to Your Account" : "Create an Account"}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {isSignIn ? "Welcome back!" : "Join us today!"}
                    </p>
                </div>
                <form>
                    {!isSignIn && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 mb-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 mb-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mb-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                        {isSignIn ? "Sign In" : "Register"}
                    </button>
                </form>
                {isSignIn && (
                    <div className="text-center mt-3">
                        <a href="#" className="text-purple-600 text-sm">Forgot password?</a>
                    </div>
                )}
                <div className="text-center mt-4 text-sm">
                    {isSignIn ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsSignIn(!isSignIn)}
                        className="text-purple-600 font-semibold hover:underline"
                    >
                        {isSignIn ? "Register" : "Sign In"}
                    </button>
                </div>
            </div>
        </div>
    );
}

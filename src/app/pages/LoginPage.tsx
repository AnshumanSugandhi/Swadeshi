import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom"; 
import { ArrowLeft, User, Phone, Mail, Lock, Briefcase } from "lucide-react"; 

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Form States
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<'traveler' | 'artisan' | 'homestay'>('traveler');
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect Logic based on role
  const routeUser = (userRole: string) => {
    if (userRole === 'artisan') navigate("/artisan-dashboard");
    else if (userRole === 'homestay') navigate("/homestay-dashboard");
    else navigate("/");
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=ea580c&color=fff`;

        await updateProfile(user, { displayName: fullName, photoURL: avatarUrl });

        // Save Role to Database
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          fullName,
          email,
          phoneNumber,
          role, // IMPORTANT: Saving the selected role
          photoURL: avatarUrl,
          createdAt: new Date().toISOString()
        });

        alert(`✅ Account Created! Welcome ${fullName}`);
        routeUser(role);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // Fetch role to redirect correctly on login
        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
        const fetchedRole = userDoc.exists() ? userDoc.data().role : 'traveler';
        routeUser(fetchedRole);
      }
    } catch (err) {
      if (err instanceof Error) setError(err.message.replace("Firebase: ", ""));
      else setError("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4 relative">
      <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition">
        <ArrowLeft className="h-5 w-5" /> Back to Home
      </Link>

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isSignUp ? "Join the Swadeshi Family" : "Welcome Back"}
        </h2>
        
        {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm font-medium">{error}</p>}

        <form onSubmit={handleAuth} className="space-y-4">
          
          {isSignUp && (
            <>
              {/* Role Selection */}
              <div className="flex gap-2 mb-4">
                {(['traveler', 'artisan', 'homestay'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg border capitalize transition-all ${
                      role === r 
                        ? 'bg-orange-600 text-white border-orange-600' 
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-orange-50'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name / Business Name"
                  className="w-full pl-10 p-3 border rounded focus:ring-2 focus:ring-orange-500 outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-3 border rounded focus:ring-2 focus:ring-orange-500 outline-none"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 p-3 border rounded focus:ring-2 focus:ring-orange-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border rounded focus:ring-2 focus:ring-orange-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            disabled={loading}
            className="w-full bg-orange-600 text-white p-3 rounded font-bold hover:bg-orange-700 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : (isSignUp ? "Create Account" : "Log In")}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "New to Swadeshi?"}{" "}
          <button 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="text-orange-600 font-bold hover:underline"
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
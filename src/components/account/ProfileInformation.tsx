import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileInformation = () => {
  const [currentUser, setCurrentUser] = useState(""); // Default user
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
  });

  // Load the selected user's profile from localStorage
  const loadUserProfile = (username: string) => {
    const data = localStorage.getItem(`userProfile_${username}`);
    if (data) {
      const parsed = JSON.parse(data);
      setProfile({ ...parsed, name: username });
    } else {
      setProfile({ name: username, email: "", contact: "" });
    }
  };

  // Load default user on mount
  useEffect(() => {
    loadUserProfile(currentUser);
  }, []);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setCurrentUser(username);
    loadUserProfile(username);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem(`userProfile_${profile.name}`, JSON.stringify(profile));
    console.log("Saved for user:", profile.name);
  };

  return (
    <motion.div
  className="flex justify-center items-center min-h-screen bg-white-400 dark:bg-[hsl(var(--category-bg))] p-4 "

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl "
      >
        <Card className="shadow-2xl rounded-2xl border border-gray-200 bg-white overflow-hidden dark:bg-[#111622] ">
          {/* Switch User Input */}
          <div className="p-6 border-b bg-gradient-to-r from-indigo-100 bg-yellow-400 dark:bg-yellow-600 ">
            <label className="text-sm font-medium text-gray-700 block mb-1">Switch User</label>
            <Input
              placeholder="Type user name (e.g. Krishna, Ravi)"
              value={currentUser}
              onChange={handleUserChange}
            />
          </div>

          <div className="flex items-center gap-4 px-6 py-4 border-b  ">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                  profile.name || "User"
                )}`}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {profile.name ? `Welcome, ${profile.name}` : "Welcome"}
              </h2>
              <p className="text-sm text-gray-600 dark:text-white">Multi-user editable profile</p>
            </div>
          </div>

          <CardContent className="p-14 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                type="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <Input
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                type="tel"
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProfileInformation;

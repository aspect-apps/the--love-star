import React, { useEffect } from "react";
import { Profile } from "../components/profile";
import { LogoutButton } from "../components/logout-button";

const ProfilePage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Profile",
      headerRight: () => <LogoutButton />,
    });
  }, []);

  return <Profile />;
};

export default ProfilePage;

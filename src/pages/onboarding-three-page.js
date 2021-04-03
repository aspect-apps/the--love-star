import React, { useEffect } from "react";
import { OnboardingThree } from "../components/onboarding-three";

const OnboardingThreePage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Registration",
    });
  }, []);
  return <OnboardingThree />;
};

export default OnboardingThreePage;

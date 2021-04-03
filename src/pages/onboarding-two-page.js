import React, { useEffect } from "react";
import { OnboardingTwo } from "../components/onboarding-two";

const OnboardingTwoPage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Registration",
    });
  }, []);
  return <OnboardingTwo />;
};

export default OnboardingTwoPage;

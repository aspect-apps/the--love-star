import React, { useEffect } from "react";
import { OnboardingFour } from "../components/onboarding-four";

const OnboardingFourPage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Finished!",
    });
  }, []);
  return <OnboardingFour />;
};

export default OnboardingFourPage;

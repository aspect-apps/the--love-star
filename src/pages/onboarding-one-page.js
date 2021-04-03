import React, { useEffect } from "react";

import { OnboardingOne } from "../components/onboarding-one";

const OnboardingOnePage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Registration",
    });
  }, []);
  return <OnboardingOne />;
};

export default OnboardingOnePage;

import {Navigation} from 'react-native-navigation';
import {OnboardingOne} from '../components/onboarding-one';
import {OnboardingTwo} from '../components/onboarding-two';
import {OnboardingThree} from '../components/onboarding-three';
import {OnboardingFour} from '../components/onboarding-four';

export function registerNavigation() {
  Navigation.registerComponent('OnboardingOne', () => OnboardingOne);
  Navigation.registerComponent('OnboardingTwo', () => OnboardingTwo);
  Navigation.registerComponent('OnboardingThree', () => OnboardingThree);
  Navigation.registerComponent('OnboardingFour', () => OnboardingFour);

  Navigation.events().registerAppLaunchedListener(() => {
    const user = Auth().currentUser;
    const routeName = user === null ? 'OnBoardingOne' : 'LandingPage';

    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'OnboardingOne',
              },
            },
          ],
        },
      },
    });
  });
}

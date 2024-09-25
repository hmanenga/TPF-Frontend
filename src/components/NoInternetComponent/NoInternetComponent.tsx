import {styles} from './styles';
import {Text} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';

const NoInternetComponent: React.FC = () => {
  return (
    <Animated.View entering={BounceIn.delay(400)} style={styles.container}>
      <Text style={styles.text1}>No internet connection</Text>
      <Text style={styles.text2}>Please check for internet connection</Text>
    </Animated.View>
  );
};

export default NoInternetComponent;

import {
  Image,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import ParallaxScrollView from '../templates/ParallaxScrollView';
import {ThemedText} from '../templates/ThemedText';
import {ThemedView} from '../templates/ThemedView';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
export default function HomeScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('moreInfo');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#122136', dark: '#122136'}}
      headerImage={
        <Image
          source={require('../../assets/images/gnus-logo.png')}
          style={styles.logo}
        />
      }>
      <View style={styles.body}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Node.js SDK Demo</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1: Try It</ThemedText>
          <ThemedText>
            This app was built to use as an example for how to use the GNUS.AI
            Node.js SDK within a React Native application.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Step 2: Learn More About GNUS.AI
          </ThemedText>
          <ThemedText>
            Tap the More Info tab to learn more about what's included in this
            starter app and to learn more about GNUS.AI.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 3: Start Building</ThemedText>
          <ThemedText>
            When you're ready to get started, you can either use this app as a
            base, or you can impliment the GNUS SDK in your own application.
          </ThemedText>
        </ThemedView>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <LinearGradient
            colors={['#0068EF', '#01DDA6']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.button}>
            <ThemedText style={styles.buttonText}>
              Learn More About GNUS.AI
            </ThemedText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    margin: 'auto',
  },
  button: {
    width: 292,
    height: 50,
    borderRadius: 66,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 'auto',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: 20,
    gap: 10,
  },
});

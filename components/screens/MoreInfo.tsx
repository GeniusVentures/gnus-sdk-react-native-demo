import {StyleSheet, Image, View, Dimensions} from 'react-native';
import {ExternalLink} from '../templates/ExternalLink';
import {ThemedText} from '../templates/ThemedText';
import {ThemedView} from '../templates/ThemedView';
import ParallaxScrollView from '../templates/ParallaxScrollView';

const screenWidth = Dimensions.get('window').width;

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#122136', dark: '#122136'}}
      headerImage={
        <Image
          source={require('../../assets/images/gnus-logo.png')}
          style={styles.gnusLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">More Info</ThemedText>
      </ThemedView>
      <ThemedText style={styles.subtitle}>
        Use the links below to find out more about GNUS.AI
      </ThemedText>
      <View>
        <ExternalLink href="https://geniusventures.io">
          <View style={styles.singleImageContainer}>
            <Image
              source={require('../../assets/images/gnus-logo.png')}
              style={styles.brandLogos}
            />
          </View>
        </ExternalLink>
        <View style={styles.gridContainer}>
          <ExternalLink href="https://github.com/GeniusVentures">
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/github-logo.png')}
                style={styles.brandLogos}
              />
            </View>
          </ExternalLink>
          <ExternalLink href="https://t.me/geniustokens">
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/telegram-logo.png')}
                style={styles.brandLogos}
              />
            </View>
          </ExternalLink>
          <ExternalLink href="https://discord.gg/gnusai">
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/discord-logo.png')}
                style={styles.brandLogos}
              />
            </View>
          </ExternalLink>
          <ExternalLink href="https://x.com/gnusai">
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/x-logo.png')}
                style={styles.brandLogos}
              />
            </View>
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/@gnusai">
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/youtube-logo.png')}
                style={styles.brandLogos}
              />
            </View>
          </ExternalLink>
          <ExternalLink href="https://www.facebook.com/gnusai">
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/facebook-logo.png')}
                style={styles.brandLogos}
              />
            </View>
          </ExternalLink>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  subtitle: {
    textAlign: 'center',
  },
  gnusLogo: {
    margin: 'auto',
  },
  brandLogos: {
    height: 50,
    resizeMode: 'contain',
  },
  singleImageContainer: {
    width: screenWidth,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageContainer: {
    width: (screenWidth - 100) / 3,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

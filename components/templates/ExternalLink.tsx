import React from 'react';
import {Pressable, Text, Platform, StyleSheet, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn'; // Import InAppBrowser

type Props = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({href, children}: Props) {
  const handlePress = async () => {
    if (Platform.OS === 'web') {
      // On web, use Linking to open the URL
      Linking.openURL(href);
    } else {
      // On native platforms, open in an in-app browser
      try {
        await InAppBrowser.open(href);
      } catch (error) {
        // Handle error if in-app browser cannot be opened
        console.error('Failed to open in-app browser:', error);
      }
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.link}>
      <Text style={styles.linkText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    // Customize your link style here
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

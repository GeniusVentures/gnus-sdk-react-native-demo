import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#122136", dark: "#122136" }}
      headerImage={
        <Image
          source={require("@/assets/images/gnus-logo.png")}
          style={styles.gnusLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">More Info</ThemedText>
      </ThemedView>
      <ThemedText>
        Use the links below to find out more about GNUS.AI.
      </ThemedText>
      <ExternalLink href="https://gnus.ai">
        <ThemedText type="link">GNUS.AI Website</ThemedText>
      </ExternalLink>
      <ExternalLink href="https://github.com/GeniusVentures">
        <ThemedText type="link">GitHub Repo</ThemedText>
      </ExternalLink>
      <ExternalLink href="https://t.me/geniustokens">
        <ThemedText type="link">Telegram</ThemedText>
      </ExternalLink>
      <ExternalLink href="https://discord.gg/gnusai">
        <ThemedText type="link">Discord</ThemedText>
      </ExternalLink>
      <ExternalLink href="https://x.com/gnusai">
        <ThemedText type="link">{`X (Formerly Twitter)`}</ThemedText>
      </ExternalLink>
      <ExternalLink href="https://www.youtube.com/@gnusai">
        <ThemedText type="link">Youtube</ThemedText>
      </ExternalLink>
      <ExternalLink href="https://www.facebook.com/gnusai">
        <ThemedText type="link">Facebook</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  gnusLogo: {
    margin: "auto",
  },
});

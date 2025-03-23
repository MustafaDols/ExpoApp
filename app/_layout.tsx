import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="About" options={{ title: "About" }} />
      <Stack.Screen name="scroll-view" options={{ title: "Scroll View" }} />
      <Stack.Screen name="flat-list" options={{ title: "Flat List" }} />
    </Stack>
  );
}

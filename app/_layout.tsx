import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="wallet" />
      <Stack.Screen name="myDetailing" />
      <Stack.Screen name="editAcount" />
      <Stack.Screen name="registrationSpent" />
    </Stack>
  );
}

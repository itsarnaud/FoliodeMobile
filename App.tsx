// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";
// import { AuthProvider } from "./app/context/AuthContext";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useAuth } from "./app/context/AuthContext";
// import Home from "./app/screens/Home";
// import Login from "./app/screens/Login";
// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <AuthProvider>
//       <StatusBar style="dark" backgroundColor="#fff" />
//       <Layout></Layout>
//     </AuthProvider>
//   );
// }

// export const Layout = () => {
//   const { authState, onLogout } = useAuth();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         { authState?.authenticated ? (
//           <Stack.Screen name="Home" component={Home}
//           options={{
//             headerRight: () => (
//               <Button onPress={async () => await onLogout?.()} title="Log out" />
//             ),
//           }} />
//         ) : (
//           <Stack.Screen name="Login" component={Login} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

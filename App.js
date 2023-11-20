import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "./src/components/pages/UserProfile";
import FavoriteRecipes from "./src/components/pages/FavoriteRecipes";
import RecipeGeneration from "./src/components/pages/RecipeGeneration";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Favorite Recipes") {
              iconName = focused ? "heart" : "heart";
            } else if (route.name === "Recipe Generation") {
              iconName = focused ? "add-circle-outline" : "add-circle-outline";
            } else if (route.name === "User Profile") {
              iconName = focused ? "person" : "person";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#C600AD",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Favorite Recipes" component={FavoriteRecipes} />
        <Tab.Screen name="Recipe Generation" component={RecipeGeneration} />
        <Tab.Screen name="User Profile" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

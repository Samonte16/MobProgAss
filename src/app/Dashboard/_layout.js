import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />

      <Drawer.Screen
                name="About"
                options={{
                  drawerLabel: 'About',
                  title: 'About',
                }}
              />
           </Drawer>
    </GestureHandlerRootView>
  );
}
        

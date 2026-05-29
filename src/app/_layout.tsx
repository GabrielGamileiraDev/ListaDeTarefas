import { Tabs } from 'expo-router';
import { House, PencilLine, User } from 'lucide-react-native';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' 
      options={{
        headerShown: false,
        tabBarStyle: {display : 'none'},
        href: null
      }}

      />
      <Tabs.Screen name='AddTask' 
      options={{
        tabBarIcon: ({size}) => <House size={25}/>
      }}
      />
      <Tabs.Screen name='novaTarefa' 
      options={{
        tabBarIcon: ({size}) => <PencilLine size={25}/>
      }}
      />
      <Tabs.Screen name='teste' 
      options={{
        tabBarIcon: (size) => <User size={25}/>
      }}
      />

    </Tabs>
  );
}
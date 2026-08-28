import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: '#4eb127', 
        headerStyle: {
            backgroundColor: '#25292e',
        },
         headerShadowVisible: false,
         headerTintColor: '#fff',
         tabBarStyle: {
            backgroundColor: '#25292e',
         },
        }}
        >
            <Tabs.Screen name="index" options={{ title: 'Inicio', 
                tabBarIcon: ({ color, focused}) => (
                <Ionicons name={focused ? 'flower-sharp' : 'flower-outline'} color={color} size={24}/>
                ),
            }}
         />
            <Tabs.Screen name="about" options={{ title: 'Sobre', 
                tabBarIcon: ({ color, focused}) => (
                <Ionicons name={focused ? 'information' : 'information-outline'} color={color} size={24}/>
                ),
            }}
         />
         <Tabs.Screen name="toDoList" options={{ title: 'Lista', 
                tabBarIcon: ({ color, focused}) => (
                <Ionicons name={focused ? 'list' : 'list-outline'} color={color} size={24}/>
                ),
            }}
         />

         <Tabs.Screen name="buscaCEP" options={{ title: 'Cep', 
                tabBarIcon: ({ color, focused}) => (
                <MaterialIcons name={focused ? 'my-location' : 'location-searching'} color={color} size={24}/>
                ),
            }}
         />

         <Tabs.Screen name="pix" options={{ title: 'Pagamento', 
                tabBarIcon: ({ color, focused}) => (
                <MaterialIcons name={focused ? 'money-off' : 'attach-money'} color={color} size={24}/>
                ),
            }}
         />
        </Tabs>
    );
}
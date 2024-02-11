import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <SafeAreaView className="bg-slate-900 flex-1">
            <Slot />
        </SafeAreaView>
    )
}
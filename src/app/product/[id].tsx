import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";

export default function Product() {
    const { id } = useLocalSearchParams()

    const product = PRODUCTS.filter(product => product.id === id)[0]

    console.log(product)

    return (
        <View className="flex-1">
            <Image
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
            />

            <View className="p-5 mt-8 flex-1">
                <Text className="text-lime-400 text-2xl font-heading my-2">
                    {formatCurrency(product.price)}
                </Text>

                <Text className="text-slate-400 font-body text-base leading-6 mb-6">
                    {product.description}
                </Text>

                {
                    product.ingredients.map((ingredient, index) => (
                        <Text key={index} className="text-slate-400 font-body text-base leading-6">
                            {"\u2022"} {ingredient}
                        </Text>
                    ))
                }
            </View>

            <View className="p-5 p-8 gap-5">
                <Button>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text>Adicionar ao pedido</Button.Text>
                </Button>

                <LinkButton title="Back to Menu" href="/" />
            </View>
        </View>
    )
}
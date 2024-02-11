import { View, FlatList } from 'react-native'

import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'

import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
    return (
        <View className='flex-1 pt-8'>
            <Header title="Do your order" cartQuantityItems={5} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CategoryButton title={item} />
                )}
                className='max-h-10 mt-5'
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
    )
}
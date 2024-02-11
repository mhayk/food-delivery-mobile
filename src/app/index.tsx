import { View, FlatList } from 'react-native'
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'

import { CATEGORIES } from '@/utils/data/products'
import { useState } from 'react'

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]) // [1

    function handleCategorySelected(selectedCategory: string) {
        setCategory(selectedCategory)
    }

    return (
        <View className='flex-1 pt-8'>
            <Header title="Do your order" cartQuantityItems={5} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelected={category === item}
                        onPress={() => handleCategorySelected(item)} />
                )}
                className='max-h-10 mt-5'
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
    )
}
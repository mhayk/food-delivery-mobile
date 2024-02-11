import { View, FlatList, SectionList, Text } from 'react-native'
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'

import { CATEGORIES, MENU } from '@/utils/data/products'
import { useRef, useState } from 'react'
import { Product } from '@/components/product'

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]) // [1

    const sectionListRef = useRef<SectionList>(null)

    function handleCategorySelected(selectedCategory: string) {
        setCategory(selectedCategory)

        const sectionIndex = CATEGORIES.findIndex(
            (category) => category === selectedCategory
        )

        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                sectionIndex,
                itemIndex: 0,
                animated: true
            })
        }
    }

    return (
        <View className='flex-1 pt-8'>
            <Header title="Do your order" cartQuantityItems={5} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item}
                horizontal
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelected={category === item}
                        onPress={() => handleCategorySelected(item)} />
                )}
                className='max-h-10 mt-5'
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />

            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={item => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => <Product data={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className='text-xl text-white font-heading mt-8 mb-3'>
                        {title}
                    </Text>
                )}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}
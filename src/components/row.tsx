import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string;
    image: string;
    rating: Number;
};

export default function Row({ title, image, rating }: Props) {
    return (
        <View style={styles.row}>
            <Image source={image} style={styles.thumbnail} />
            <Text style={styles.title}>{title + ": " + rating + "/10"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    thumbnail: {
        width: 120,
        height: 90,
        borderRadius: 4,
        marginRight: 16,
        borderWidth: 1,
        borderColor: '#CBD5E0'
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: '500',
        color: '#1A202C',
    },
});
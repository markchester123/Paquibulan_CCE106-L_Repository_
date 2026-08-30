import {StyleSheet, Text, View, Image} from 'react-native';

export default function StatCard(props){
    return(
        <View style={[styles.card, { backgroundColor: props.bgColor}]}>
            <Text style={styles.title}>{props.title}<Image source={props.image} style={styles.image} /></Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 12,
        marginVertical: 10,
        width: '100%',
        borderWidth: 4,
        borderColor: 'rgba(2, 0, 0, 0.15)',
    },
    title: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: '600',
    },
    value: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight:'bold',
        marginTop: 5,
    },
    image: {
        width: 20,
        height: 20,
        marginRight:8,
    },
    
});
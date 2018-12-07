import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop:450,
        fontSize: 40,
        fontWeight: 'bold',
        color:'blue'
    },
    backgroundImage: {
        backgroundColor: 'lightblue',
        resizeMode : 'contain',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }

});

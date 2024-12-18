// styles/Styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex: {
        display: 'flex',
    },
    flex1: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyEvenly: {
        justifyContent: 'space-evenly',
    },
    itemsCenter: {
        alignItems: 'center',
    },
    itemsStart: {
        alignItems: 'flex-start',
    },
    itemsEnd: {
        alignItems: 'flex-end',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    selfStart: {
        alignSelf: 'flex-start',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    flexNoWrap: {
        flexWrap: 'nowrap',
    },
    primaryColor: {
        color: '#4D4DFF',
    },
    secondaryColor: {
        color: '#585858',
    },
    thirdColor: {
        color: '#222222',
    },
    transparentBg: {
        backgroundColor: 'transparent',
    },
    whiteBg: {
        backgroundColor: '#ffffff',
    },
    blackBg: {
        backgroundColor: '#000000',
    },
    primaryBg: {
        backgroundColor: '#4D4DFF',
    },
    secondaryBg: {
        backgroundColor: '#585858',
    },
    thirdBg: {
        backgroundColor: '#222222',
    },
    white: {
        color: 'white',
    },
    black: {
        color: 'black',
    },
    bold: {
        fontWeight: 'bold',
    },
    padding10: {
        padding: 10,
    },
    padding20: {
        padding: 20,
    },
    padding40: {
        padding: 40,
    },
    paddingBottom100: {
        paddingBottom: 100,
    },
    paddingVertical20: {
        paddingVertical: 20,
    },
    paddingHorizontal40: {
        paddingHorizontal: 40,
    },
    paddingHorizontal25: {
        paddingHorizontal: 25,
    },
    marginRight10: {
        marginRight: 10,
    },
    marginLeft10: {
        marginLeft: 10,
    },
    marginBottom10: {
        marginBottom: 10,
    },
    marginBottom50: {
        marginBottom: 50,
    },
    marginBottom100: {
        marginBottom: 100,
    },
    marginTop10: {
        marginTop: 10,
    },
    fontSize12: {
        fontSize: 12,
    },
    fontSize14: {
        fontSize: 14,
    },
    fontSize16: {
        fontSize: 16,
    },
    fontSize20: {
        fontSize: 20,
    },
    fontSize24: {
        fontSize: 24,
    },
    fontSize30: {
        fontSize: 30,
    },
    disabled: {
        backgroundColor: '#cccccc',
    },
    borderRadius10: {
        borderRadius: 10,
    },
    borderRadius100: {
        borderRadius: 100,
    },
    noBorder: {
        borderWidth: 0,
        borderColor: 'transparent',
    },
    centerText: {
        textAlign: 'center',
    }
});

export default styles;
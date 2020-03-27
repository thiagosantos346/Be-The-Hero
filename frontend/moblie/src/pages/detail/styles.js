import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: '4%',
        paddingTop : Constants.statusBarHeight + 20,

    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    headerText : {
        fontSize : 15,
        color : '#737380',
    },
    headerTextBold : {
        fontWeight : 'bold'
    },
    title : {
        fontSize : 30,
        marginBottom : '1%',
        marginTop : '10%',
        color : '#13131a',
        fontWeight : 'bold',
    },
    description : {
        fontSize : 14,
        lineHeight : 40,
        color : '#737380'
    },
    incidentsList : {
        marginTop : '4%',
    },
    incident : {
        borderRadius : 8,
        backgroundColor : "#FFF",
        marginBottom : '4%',
        padding : '6%',
        marginTop : '6%'
    },  
    contactBox : {
        borderRadius : 8,
        backgroundColor : "#FFF",
        marginBottom : '4%',
        padding : '6%',
    }, 
    incidentProperty : {
        fontSize : 14,
        color : '#41414d',
        fontWeight : 'bold',

    },
    incidentValue : {
        marginTop : 8,
        fontSize : 15,
        marginBottom : '4%',
        color : '#737380',
    },
    heroTitle : {
        fontWeight : 'bold',
        fontSize : 16,
        color  : '#13131a',
    },
    heroDescription : {
        fontSize : 15,
        color : '#737380',
        marginTop : '6%',
    },
    actions : {
        marginTop : '6%',
        flexDirection : 'row',
        justifyContent  : 'space-between'
    },
    action : {
        backgroundColor : '#e02041',
        borderRadius : 8,
        height : 50,
        width : '48%',
        justifyContent : 'center',
        alignContent : 'center',
        alignItems : 'center'
    },
    actionText :{
        color : '#FFF',
        fontSize : 15,
        fontWeight : 'bold',
    }

});

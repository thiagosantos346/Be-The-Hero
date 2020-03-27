import React, { useEffect }from 'react';
import * as MailComponser from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import formatBLR from '../../tool/formatBLR';

import logoImg from '../../assents/logo.png';
import styles from './styles';
import mailTemplate from './mailTemplate';


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const value  = formatBLR(incident.value);

    function navigantionBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComponser.composeAsync({
            subject :  'herói do caso : Cadelinha Atropela',
            recipients : [incident.email],
            body : mailTemplate(incident.name, incident.description , value)
        })
    }
    

    function sendWhatapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${mailTemplate(incident.name, incident.description , value )}`);
    }

    return (
        <View style={styles.container}>
            <View  style={styles.header} >
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigantionBack}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>

            <View  style={styles.incident} >
                <Text style={styles.incidentProperty}>  ONG: </Text>
                <Text style={styles.incidentValue}>  { incident.name} </Text>
                <Text style={styles.incidentProperty}>  Caso: </Text>
                <Text style={styles.incidentValue}> { incident.title}</Text>
                <Text style={styles.incidentProperty}> Valor: </Text>
                <Text style={styles.incidentValue}>  {value } </Text>
            </View >
            <View  style={styles.contactBox} >
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.description}>Entre em contato:</Text>
                <View style={styles.actions} >
                    <TouchableOpacity style={styles.action} onPress={sendWhatapp}>
                        <Text  style={styles.actionText} > WhatsApp </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}> E-mail </Text>
                    </TouchableOpacity>
                </View>
            </View >

        </View>
    );
}

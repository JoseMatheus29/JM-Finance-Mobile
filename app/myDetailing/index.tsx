import React from 'react';
import { View, Text } from 'react-native';
import ArrowBack from '../components/arrowBack';
import { globalStyles } from '../style/globalStyles';

import { myDetailingStyle } from '../styles/myDetailingStyles'

import { PieChart } from 'react-native-gifted-charts';
import SideBar from '../components/sidebar';
import CardHorizontal from '../components/cardHorizontal';
import * as Progress from 'react-native-progress';



export default function myDetailing() {

    const pieData = [
        { value: 10, color: '#6F90C9' },
        { value: 20, color: '#98B0D8' },
        { value: 30, color: '#3161B2' }
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.pageConfig}>
                <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                    <ArrowBack />
                    <Text style={globalStyles.sectionTitle}>Meu detalhamento</Text>
                    <Text ></Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingVertical: 20 }}>
                    <PieChart 
                        data={pieData} 
                        radius={120}
                    />
                    <Text style={myDetailingStyle.valueGraf}>R$ 3.578</Text>

                </View>
                <View style={myDetailingStyle.cardValue}>
                    <View style={myDetailingStyle.cardPosition}>
                        <Text style={myDetailingStyle.subtitle}>Gastos do mês</Text>
                        <Text style={myDetailingStyle.title}>R$3.578</Text>
                    </View>

                    <Progress.Bar progress={0.2} width={null} color="#A0AEC0" />

                </View>

                <Text style={myDetailingStyle.sectionTitle}> Seus gastos </Text>


                <CardHorizontal />
                <CardHorizontal />


            </View>


            <SideBar />
        </View>
    );
}

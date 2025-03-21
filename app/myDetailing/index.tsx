import React from 'react';
import { View, Text } from 'react-native';
import ArrowBack from '../components/arrowBack';
import { globalStyles } from '../style/globalStyles';

import { myDetailingStyle } from './myDetailing'

import { PieChart } from 'react-native-svg-charts';
import SideBar from '../components/sidebar';
import CardHorizontal from '../components/cardHorizontal';
import * as Progress from 'react-native-progress';



export default function myDetailing() {

    const data = [10, 20, 30]
    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: ['#6F90C9', '#98B0D8', '#3161B2'][index % 3]
        }
    }))

    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.pageConfig}>
                <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                    <ArrowBack />
                    <Text style={globalStyles.sectionTitle}>Meu detalhamento</Text>
                    <Text ></Text>
                </View>

                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <PieChart style={{ height: 300 }} data={pieData} />
                    <Text style={myDetailingStyle.valueGraf}>R$ 3.578</Text>

                </View>
                <View style={myDetailingStyle.cardValue}>
                    <View style={myDetailingStyle.cardPosition}>
                        <Text style={myDetailingStyle.subtitle}>Gastos do mês</Text>
                        <Text style={myDetailingStyle.title}>R$3.578</Text>
                    </View>

                    <Progress.Bar progress={0.2} width={"90%"} color="#A0AEC0" />

                </View>

                <Text style={myDetailingStyle.sectionTitle}> Seus gastos </Text>


                <CardHorizontal />
                <CardHorizontal />


            </View>


            <SideBar />
        </View>
    );
}

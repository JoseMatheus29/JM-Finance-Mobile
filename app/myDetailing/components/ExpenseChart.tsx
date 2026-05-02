import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

interface PieDataItem {
  value: number;
  color: string;
  label: string;
}

interface ExpenseChartProps {
  pieData: PieDataItem[];
  totalGastos: number;
}

export default function ExpenseChart({ pieData, totalGastos }: ExpenseChartProps) {
  return (
    <View className="bg-white mx-4 rounded-3xl p-5 mb-4 shadow-lg shadow-[#3161B2]/10 elevation-4">
      <Text className="text-sm font-bold text-[#1A2B4A] mb-4">
        Distribuição de Gastos
      </Text>

      <View className="flex-row items-center gap-5">
        {/* Chart */}
        <View className="items-center justify-center">
          <PieChart
            data={pieData}
            radius={80}
            innerRadius={50}
            centerLabelComponent={() => (
              <View className="items-center">
                <Text className="text-[11px] text-[#A0AEC0] font-medium">Total</Text>
                <Text className="text-[15px] text-[#1A2B4A] font-extrabold">
                  R${totalGastos.toLocaleString('pt-BR')}
                </Text>
              </View>
            )}
          />
        </View>

        {/* Legenda */}
        <View className="flex-1 gap-2.5">
          {pieData.map((item, i) => (
            <View key={i} className="flex-row items-center gap-2">
              <View className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <View className="flex-1">
                <Text className="text-xs font-semibold text-[#1A2B4A]">{item.label}</Text>
                <Text className="text-[10px] text-[#A0AEC0]">{item.value}%</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function DrawerContent(props) {
	const [menuName, setMenuName] = useState({
		'Inicio': '#A606A9',
		'CadastroProjeto': '#E5E5E5',
		'ApontamentoHoras': '#E5E5E5',
		'ConsultaTimeTask': '#E5E5E5',
		'Configuracoes': '#E5E5E5',
	});

	const [textMenu, setTextMenu] = useState({
		'Inicio': '#FFF',
		'CadastroProjeto': '#A606A9',
		'ApontamentoHoras': '#A606A9',
		'ConsultaTimeTask': '#A606A9',
		'Configuracoes': '#A606A9',
	})
	const [activityScreen, setActivityScreen] = useState('Inicio');

	const changeNavigation = (route) => {
		setMenuName(prevState => ({...prevState, [activityScreen]: '#E5E5E5'}));
		setMenuName(prevState => ({...prevState, [route]: '#A606A9'}));
		setTextMenu(prevState => ({...prevState, [activityScreen]: '#A606A9'}));
		setTextMenu(prevState => ({...prevState, [route]: '#FFF'}));
		setActivityScreen(route);
		props.navigation.navigate(route);
	}

	return(
		<View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
			<DrawerContentScrollView style={Style.drawerContent} {...props}>
				<DrawerItem
					style={{ backgroundColor: menuName['Inicio']}}
					label={() => <Text style={Style.menuTextStyle, { color: textMenu['Inicio']}}>INICIO</Text>}
					onPress={() => changeNavigation('Inicio')}
				/>
				<DrawerItem
					style={{ backgroundColor: menuName['CadastroProjeto']}}
					label={() => <Text style={Style.menuTextStyle, { color: textMenu['CadastroProjeto']}}>CADASTRO DE PROJETO</Text>}
					onPress={() => changeNavigation('CadastroProjeto')}
				/>
				<DrawerItem
					style={{ backgroundColor: menuName['ApontamentoHoras']}}
					label={() => <Text style={Style.menuTextStyle, { color: textMenu['ApontamentoHoras']}}>APONTAMENTO DE HORAS</Text>}
					onPress={() => changeNavigation('ApontamentoHoras')}
				/>
				<DrawerItem
					style={{ backgroundColor: menuName['ConsultaTimeTask']}}
					label={() => <Text style={Style.menuTextStyle, { color: textMenu['ConsultaTimeTask']}}>CONSULTA TIME TASK</Text>}
					onPress={() => changeNavigation('ConsultaTimeTask')}
				/>
				<DrawerItem
					style={{ backgroundColor: menuName['Configuracoes']}}
					label={() => <Text style={Style.menuTextStyle, { color: textMenu['Configuracoes']}}>CONFIGURAÇÕES</Text>}
					onPress={() => changeNavigation('Configuracoes')}
				/>
			</DrawerContentScrollView>

		</View>
	)
}

const Style = StyleSheet.create({
	drawerContent: {
		flex: 1,
		backgroundColor: '#E5E5E5',
		flexDirection: 'column',
		marginTop: 20
	},
	menuTextStyle: {
		fontSize: 15
	},
});

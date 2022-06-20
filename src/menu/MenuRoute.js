import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './../pages/Home';
import CadastroProjeto from './../pages/CadastroProjeto';
import ApontamentoHoras from './../pages/ApontamentoHoras';
import ConsultaTimeTask from './../pages/ConsultaTimeTask';
import Configuracoes from './../pages/Configuracoes';
import DrawerMenuStyle from './DrawerMenuStyle';

const Drawer = createDrawerNavigator();

export default function MenuRoute(props) {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerContent={ (props) => <DrawerMenuStyle {...props} />}
			screenOptions={{ headerShown: false }}
		>
			<Drawer.Screen name="Inicio" component={Home}/>
			<Drawer.Screen name="CadastroProjeto" component={CadastroProjeto}/>
			<Drawer.Screen name="ApontamentoHoras" component={ApontamentoHoras}/>
			<Drawer.Screen name="ConsultaTimeTask" component={ConsultaTimeTask}/>
			<Drawer.Screen name="Configuracoes" component={Configuracoes}/>
		</Drawer.Navigator>
	);
  }

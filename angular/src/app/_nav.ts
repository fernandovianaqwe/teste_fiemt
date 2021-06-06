import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Produto'
  },
  {
    name: 'Cadastro de Produto',
    url: '/theme/colors',
    icon: 'icon-basket-loaded'
  },
  {
    title: true,
    name: 'Clientes'
  },
  {
    name: 'Cadastro de Cliente',
    url: '/charts',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Pedidos'
  },
  {
    name: 'Fazer Pedidos',
    url: '/charts',
    icon: 'icon-bag'
  }
];

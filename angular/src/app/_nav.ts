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
    url: '/produto',
    icon: 'icon-basket-loaded'
  },
  {
    title: true,
    name: 'Clientes'
  },
  {
    name: 'Cadastro de Cliente',
    url: '/cliente',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Pedidos'
  },
  {
    name: 'Fazer Pedidos',
    url: '/pedido',
    icon: 'icon-bag'
  }
];

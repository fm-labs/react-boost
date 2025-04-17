import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import SpeedIcon from '@mui/icons-material/Speed'
import {
  Apartment,
  DeveloperBoard,
  MonitorHeartRounded,
  Security,
  Settings,
  Storage,
  Surfing,
  Wallet,
} from '@mui/icons-material'
import { IRoutedNavigationItem } from '@react-boost/common'

export const demoNavItems: IRoutedNavigationItem[] = [
  { key: 'gs_dashboard', label: 'Server', to: '/', icon: <SpeedIcon /> },
  { key: 'gs_metrics', label: 'Metrics', to: '/', icon: <MonitorHeartRounded /> },
]

export const demoNavItems2 = [
  { key: 'gs_backoffice', label: 'Dashboard', to: `/`, icon: <DashboardIcon /> },
  { key: 'bo_operations', label: 'Operations', to: `/`, icon: <Apartment /> },
  { key: 'bo_players', label: 'Players', to: `/`, icon: <Surfing /> },
  { key: 'bo_stats_gameround', label: 'Statistics', to: `/`, icon: <BarChartIcon /> },
  { key: 'gs_conf', label: 'Configuration', to: `/`, icon: <Settings /> },
  { key: 'gs_wallets', label: 'Wallets!', to: `/`, icon: <Wallet /> },
  { key: 'internals', label: 'Internals', to: `/`, icon: <DeveloperBoard /> },
  { key: 'database', label: 'Database', to: `/`, icon: <Storage /> },
  { key: 'security', label: 'Access Control', to: `/`, icon: <Security /> },
]

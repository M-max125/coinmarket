import { AppMenuMapper } from "../layout/AppMenu";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TokenIcon from '@mui/icons-material/Token';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PreviewIcon from '@mui/icons-material/Preview';
import CategoryIcon from '@mui/icons-material/Category';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccountTreeIcon from '@mui/icons-material/AccountTree';


//ALL ROUTES
export const MENU_ITEMS: AppMenuMapper[] = [
    { label: 'Cryptocurrency', icon:CurrencyBitcoinIcon },
    { label: 'Exchanges', icon:  CurrencyExchangeIcon},
    { label: 'NFT', icon: TokenIcon },
    { label: 'Cryptown', icon: AccountBalanceIcon },
    { label: 'Portfolio', icon: AccountTreeIcon },
    { label: 'Watchlist', icon: PreviewIcon },
    { label: 'Products', icon: CategoryIcon },
    {label : 'Learn', icon :LightbulbIcon },
]
import { Category2 } from "iconsax-react";
import { WalletAdd } from "iconsax-react";
import { Chart1 } from "iconsax-react";
import { Airdrop } from "iconsax-react";
import { ProfileCircle } from "iconsax-react";

const dashboardMenuData = [
  { label: "Overview", path: "/", icon: <Category2 /> },
  { label: "Fund Wallet", path: "/fundwallet", icon: <WalletAdd /> },
  { label: "History", path: "/history", icon: <Chart1 /> },
  { label: "Referral", path: "/referral", icon: <Airdrop /> },
  { label: "Profile", path: "/profile", icon: <ProfileCircle /> },
];

export default dashboardMenuData;

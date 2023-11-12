import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import HomeLayout from '@/components/HomeLayout';
import DashboardLayout from '@/components/DashboardLayout';

const usePageLayout = () => {
  const router = useRouter();
  const authRoutes = ['/signup', '/forgotpassword'];
//   const homeRoutes = ['/'];
  const dashboardRoutes = ['/dashboard/overview', '/dashboard/fundwallet', '/dashboard/history', '/dashboard/referral', '/dashboard/profile', ]

  const shouldRenderLayout1 = authRoutes.includes(router.pathname);
  const shouldRenderLayout2 = dashboardRoutes.includes(router.pathname);
//   const shouldRenderLayout3 = dashboardRoutes.includes(router.pathname);

  const getPageLayout = () => {
    if (shouldRenderLayout1) {
      return <Layout />;
    } else if (shouldRenderLayout2) {
      return <DashboardLayout />;
    } else {
        return <HomeLayout />;
    }
  };

  return getPageLayout();
};

export default usePageLayout;
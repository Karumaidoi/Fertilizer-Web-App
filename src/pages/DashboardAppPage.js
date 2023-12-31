import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { Spin } from 'antd';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';

import { useAppState } from '../context/userContext';
import { useBooks } from '../layouts/orders/useBooks';
import { useBids } from '../hooks/bids/useBids';

export default function DashboardAppPage() {
  const { user } = useAppState();
  const theme = useTheme();
  const { bids } = useBids();

  const { books, isLoading } = useBooks();

  const noBags = books?.reduce((acc, curr) => curr?.noBags + acc, 0);
  const netWeight = books?.reduce((acc, curr) => curr?.size * curr?.noBags + acc, 0);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <Helmet>
        <title> Dashboard | Fertilizer Portal </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome back {user?.user_metadata?.userName.split(' ')[0]}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="All Fertilizers"
              total={books?.length ?? 0}
              icon={'ant-design:pie-chart-outlined'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Available bags" total={noBags ?? 0} icon={'ant-design:diff-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Net Weight" total={netWeight ?? 0} icon={'ant-design:aim-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Orders" total={bids?.length ?? 1} icon={'ant-design:paper-clip-outlined'} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

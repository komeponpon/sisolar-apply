// pages/dashboard.tsx
import * as React from 'react';
import { useRouter } from 'next/router';
import { Authenticator } from '@aws-amplify/ui-react';
import Auth from '@aws-amplify/auth';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

function Dashboard() {
  const router = useRouter();

  const handleSignOut = async () => {
    await Auth.signOut();
    router.push('/');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <h1>ダッシュボード</h1>
      <p>ようこそ！</p>
      <Button onClick={handleSignOut}>ログアウト</Button>
    </Box>
  );
}

export default function DashboardPage() {
  return (
    <Authenticator.Provider>
        <Dashboard />
    </Authenticator.Provider>
  );
}

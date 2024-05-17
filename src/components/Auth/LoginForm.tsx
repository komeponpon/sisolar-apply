import * as React from 'react';
import { useRouter } from 'next/router';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Checkbox from '@mui/joy/Checkbox';

function LoginForm() {
  const router = useRouter();
  const [loginId, setLoginId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Amplify Authenticatorが自動で処理します
    router.push('/dashboard');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="loginId">ログインID</FormLabel>
        <Input
          id="loginId"
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          autoComplete="username"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">パスワード</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Checkbox size="sm" label="パスワードを保存する" name="persistent" />
        </Box>
        <Button type="submit" fullWidth>
          ログイン
        </Button>
      </Stack>
    </Box>
  );
}

function CustomAuthenticator() {
  const { signOut, user } = useAuthenticator();

  if (user) {
    return (
      <Box>
        <Button onClick={signOut}>ログアウト</Button>
      </Box>
    );
  }

  return <LoginForm />;
}

export default function App() {
  return (
    <Authenticator.Provider>
      <CustomAuthenticator />
    </Authenticator.Provider>
  );
}

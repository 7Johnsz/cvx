'use client';

import useSWR from 'swr';
import { API_URL } from '@/config/api';

const fetcher = (url: string) =>
  fetch(url, {
    method: 'POST',
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());

export function WelcomeHeader() {
  const { data, error, isLoading } = useSWR(`${API_URL}/me`, fetcher);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar usuário.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Bem-vindo de volta, {data?.name || 'usuário'}! 👋
      </h1>
      <p className="text-muted-foreground mt-1">
        Obrigado por usar o <span className="font-semibold">CVx</span> — sua plataforma inteligente de criação de currículos.
      </p>
    </div>
  );
}
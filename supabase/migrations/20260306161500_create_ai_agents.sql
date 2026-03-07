-- Tabela para armazenar as configurações do Agente de IA de cada usuário
create table if not exists public.ai_agents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  name text not null default 'Meu Assistente',
  system_prompt text not null default 'Você é um assistente prestativo. Seja sempre educado e claro.',
  is_active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique (user_id) -- Apenas um agente por usuário por enquanto
);

-- Habilitar RLS (Segurança)
alter table public.ai_agents enable row level security;

-- Políticas de acesso: o usuário só pode ler e editar o seu próprio agente
create policy "Users can view own agent" on public.ai_agents
  for select using (auth.uid() = user_id);

create policy "Users can insert own agent" on public.ai_agents
  for insert with check (auth.uid() = user_id);

create policy "Users can update own agent" on public.ai_agents
  for update using (auth.uid() = user_id);

-- Helper Function for Updated At
create or replace function public.update_updated_at_column()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

-- Função de trigger para atualizar o updated_at
create trigger update_ai_agents_updated_at
  before update on public.ai_agents
  for each row execute procedure public.update_updated_at_column();

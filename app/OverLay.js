'use client';
import { SidebarProvider } from '@/Context';

export default function Providers({ children }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}

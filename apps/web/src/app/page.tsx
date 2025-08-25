import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to dashboard for now - in production this would check auth state
  redirect('/dashboard');
}

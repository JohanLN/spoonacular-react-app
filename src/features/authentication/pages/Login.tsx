import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative w-full max-w-lg px-4 py-8">
        <div
          className="absolute inset-0 -z-10 h-full w-full rounded-3xl bg-gradient-to-r from-secondary via-primary to-secondary blur-3xl"
          aria-hidden="true"
        />

        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-center text-2xl">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <LoginForm />

            <div className="text-center">
              <span className="text-muted-foreground">
                Don't have an account?{' '}
              </span>
              <Button variant="link" asChild className="px-2">
                <Link
                  to="/authentication/signup"
                  className="inline-flex items-center gap-1"
                >
                  Create one
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

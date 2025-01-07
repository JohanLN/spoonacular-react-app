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
import { SignupForm } from '../components/SignupForm';

export function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative w-full max-w-lg px-4 py-8">
        <div
          className="absolute inset-0 -z-10 h-full w-full rounded-3xl bg-gradient-to-r from-secondary via-primary to-secondary blur-3xl"
          aria-hidden="true"
        />

        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-center text-2xl">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">
              Enter your information to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <SignupForm />

            <div className="text-center">
              <span className="text-muted-foreground">
                Already have an account?{' '}
              </span>
              <Button variant="link" asChild className="px-2">
                <Link
                  to="/authentication"
                  className="inline-flex items-center gap-1"
                >
                  Sign in
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

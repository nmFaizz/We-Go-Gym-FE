"use client";
import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUserQuery from '@/hooks/useUserQuery';

function withAuth<P extends Record<string, unknown>>(WrappedComponent: ComponentType<P>) {
  const AuthenticatedComponent = (props: P) => {
    const router = useRouter();
    const { data, isLoading, isError } = useUserQuery();

    useEffect(() => {
      if (!isLoading && (!data?.data || isError)) {
        router.push('/');
      }
    }, [data, isLoading, isError, router]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        </div>
      );
    }

    if (!data?.data || isError) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

  return AuthenticatedComponent;
}

export default withAuth;
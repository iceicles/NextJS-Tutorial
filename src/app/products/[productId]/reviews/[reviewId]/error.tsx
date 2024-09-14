'use client';

/**
 * Automatically wrap a route segment and its nested children in a React Error Boundary
 *
 * Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
 *
 * Isoloate erros to affected segments while keeping the rest of the application functional
 *
 * Add functionality to attempt to recover from an error without a full page reload
 */

export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
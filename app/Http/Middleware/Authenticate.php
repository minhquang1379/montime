<?php

namespace App\Http\Middleware;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return route('login');
        }
    }
    protected function unauthenticated($request, array $guards)
    {
        try {
            //code...
            throw new AuthenticationException(
                'Unauthenticated.',
                $guards
            );
        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 403,
                'message' => 'Request Fail',
                'error' => $error->getMessage()
            ]);
        }
    }
}

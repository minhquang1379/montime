<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    //
    public function login(LoginRequest $request)
    {
        try {
            $user =  User::where('email', $request->email)->first();
            if ($user) {
                if (!Hash::check($request->password, $user->password, [])) {
                    return response()->json([
                        'status_code' => 422,
                        'message' => 'Username Or Password Incorrect',

                    ]);
                }

                $tokenResult = $user->createToken('authToken')->plainTextToken;
                return response()->json([
                    'status_code' => 200,
                    'access_token' => $tokenResult,
                    'token_type' => 'Bearer',
                    'name' => $user->name,
                    'email' => $user->email
                ]);
            }
            return response()->json([
                'status_code' => 422,
                'message' => 'User Not Found',

            ]);
        } catch (Exception $error) {
            Log::error($error);
            return response()->json([
                'status_code' => 500,
                'message' => 'Error In Login',
                'error' => $error->getMessage(),
            ]);
        }
    }
    public function register(RegisterRequest $request)
    {
        try {
            $user = new User();

            $input = $request->all();
            $user->email = $input['email'];
            $user->password = Hash::make($input['password']);
            $user->name = $input['name'];
            $user->role_id = $input['role_id'];

            $user->save();

            return response()->json([
                'status_code' => 200,
                'message' => 'Register Successful',

            ]);

            throw new Exception('test');
        } catch (Exception $error) {
            Log::error($error);
            return response()->json([
                'status_code' => 500,
                'message' => 'Error In Register',
                'error' => $error->getMessage(),
            ]);
        }
    }
    public function logout()
    {
        try {
            Auth::user()->tokens()->delete();
            return response()->json([
                'status_code' => 200,
                'message' => 'Logout Successful'
            ]);
        } catch (\Exception $error) {
            //throw $th;
            Log::error($error);
            return response()->json([
                'status_code' => 500,
                'message' => 'Error In Logout',
                'error' => $error->getMessage(),
            ]);
        }
    }
}

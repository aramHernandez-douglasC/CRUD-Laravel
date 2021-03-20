<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Usertoken;



class UserAuthController extends Controller
{
   /**
    * Validates that a password hash matches the one stored on the database
     *   @param request : Handles the client request 
     *   @return httpresponse: returns a response in JSON format with either an error message or the token 
    */
    function check(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required'
        ]);

        $user = User::where('email','=',$request->email)->first();
        if(!$user){
            return response()->json([
                'error' => 'User not found',
                'user'=> $user
            ]);
        }
        else if ($request->password != $user->password){
            return response()->json([
                'error' => 'User password incorrect',
                'user'=> $user
            ]);
        }
        else{
            $token = (string) $user->id . (string) time();
            $store = new Usertoken([
                'token'=>$token
            ]);   
            $store->save();        

            return response()->json([
                'success' => 'successfully logged',
                'token' => $token,
                

            ]);
        }

    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Vehicle as VehicleResource;
use App\Models\Vehicle;


class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
       
        try{
           
            return VehicleResource::collection(Vehicle::all());

        }catch(exception $e){
            echo $e;
        }   
    }
    

   

   

    

    
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\VehicleImport;


class VehicleSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = __DIR__."/../../database/Database - Vehicles Table.csv";
        Excel::import(new VehicleImport, $file);
        
    }
}

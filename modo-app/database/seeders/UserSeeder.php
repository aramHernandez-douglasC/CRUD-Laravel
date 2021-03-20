<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\UserImport;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = __DIR__."/../../database/Database - Users Table.csv";
        Excel::import(new UserImport, $file);
        
    }

    
}

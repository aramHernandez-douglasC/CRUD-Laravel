<?php

namespace App\Imports;

use App\Models\Vehicle;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpserts;


class VehicleImport implements ToModel, WithHeadingRow, WithUpserts
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Vehicle([
            'id' => $row['id'],
            'make' => $row['make'],
            'model' => $row['model'],
            'year' => $row['year'],
            'colour' => $row['colour'],
            'location_id' => $row['location_id'],
            'location_description' => $row['location_description']
            
        ]);
    }

    public function uniqueBy(){
        return 'id';
    }
}

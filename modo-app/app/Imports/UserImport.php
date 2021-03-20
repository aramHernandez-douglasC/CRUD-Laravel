<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithUpserts;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class UserImport implements ToModel, WithHeadingRow, WithUpserts
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User([
            'id' => $row['id'],
            'email' => $row['email'],
            'password' => $row['password'],
            'timestamp' => $row['timestamp'],
        ]);
    }
    public function uniqueBy(){
        return [
            'id',
            'email'
        ];
    }
}

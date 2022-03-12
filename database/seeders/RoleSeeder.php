<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $roles = [
            [
                'name' => 'admin',
                'code' => 'ADMIN'
            ],
            [
                'name'  => 'user',
                'code' => 'USER'
            ],
        ];

        foreach($roles as $data){
            DB::table('roles')->insert([
                'name' => $data['name'],
                'code' => $data['code'],
                'created_at' => Carbon::now(),
                'created_by' => 1
            ]);
        }
    }
}

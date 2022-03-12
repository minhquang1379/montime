<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Quang Le',
                'email' => 'minhquangle71@gmail.com',
                'role_id' => 1,
            ],
            [
                'name' => 'Quang Le (User)',
                'email' => 'minhquanglee71@gmail.com',
                'role_id' => 2
            ],
        ];

        foreach ($users as $data) {
            DB::table('users')->insert([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make('password'),
                'role_id' => $data['role_id'],
                'created_at' => Carbon::now(),
                'created_by' => 1
            ]);
        }
    }
}

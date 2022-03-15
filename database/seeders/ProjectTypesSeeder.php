<?php

namespace Database\Seeders;

use App\Constant\GlobalConstant;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $projectTypes  = [
            [
                'name' => 'Personal',
            ],
            [
                'name' => 'Team',
            ],
        ];
        foreach ($projectTypes as $data) {
            DB::table('project_types')->insert([
                'name' => $data['name'],
                'code' =>  strtoupper($data['name']),
                'created_by' => GlobalConstant::SYSTEM_ADMIN_ID,
            ]);
        }
    }
}

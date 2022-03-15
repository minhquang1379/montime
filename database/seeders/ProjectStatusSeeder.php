<?php

namespace Database\Seeders;

use App\Constant\GlobalConstant;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $status = [
            'Not Started',
            'In-Progress',
            'On-Hold',
            'Done',
            'Re-open'
        ];
        foreach ($status as $data) {
            DB::table('project_status')->insert([
                'name' => $data,
                'created_by' => GlobalConstant::SYSTEM_ADMIN_ID
            ]);
        }
    }
}

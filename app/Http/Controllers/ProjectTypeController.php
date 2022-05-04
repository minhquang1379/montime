<?php

namespace App\Http\Controllers;

use App\Models\ProjectType;
use Illuminate\Http\Request;

class ProjectTypeController extends Controller
{
    //
    public function getList()
    {
        $data = [
            'status_code' => 200,
            'projectTypes' => ProjectType::pluck('name', 'id')
        ];
        return response()->json($data);
    }
}

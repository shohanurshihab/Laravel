<?php

namespace App\Http\Controllers;
use App\Models\Device;

use Illuminate\Http\Request;

class dummyAPI extends Controller
{
    //
    function getData()
    {
       // return["Waz"=>"True","Mawlana"=>"Unknown","Place"=>"Moishanbari"];
       return Device::all();
    }
}

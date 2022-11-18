<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class dummyAPI extends Controller
{
    //
    function getData()
    {
        return["Waz"=>"True","Mawlana"=>"Unknown","Place"=>"Moishanbari"];
    }
}

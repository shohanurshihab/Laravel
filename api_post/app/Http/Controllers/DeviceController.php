<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;

class DeviceController extends Controller
{
    function listparams($id=null)
    {
         return Device::find($id);
    }
    function list()
    {
           return Device::all();
    }
    function add(Request $req)
    {
        $device = new Device;
        $device->name=$req->name;
        $device->password=$req->password;
        $device->address=$req->address;
        $device->save();
        return $device;
    }
}

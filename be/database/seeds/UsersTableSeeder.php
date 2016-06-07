<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Caffeinated\Shinobi\Models\Role;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        $admin = new User();
        $admin->name = 'Fernando Castillo';
        $admin->email = 'fernando@kreativeco.com';
        $admin->password = bcrypt('1234567890');
        $admin->save();


    }
}

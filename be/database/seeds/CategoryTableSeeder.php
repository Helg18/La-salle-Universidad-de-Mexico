<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use Caffeinated\Shinobi\Models\Role;


class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {



        $x = new Category();
        $x->name = 'Universidad La Salle';
        $x->save();


    }
}

<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;
use Caffeinated\Shinobi\Models\Role;


class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {



        //** Categoria 1 **/
        $x = new Post();
        $x->title = 'La Salle Hoy';
        $x->subtitle='La Residencia Universitaria de la Universidad La Salle es un espacio donde el estudio y el desarrollo personal son una prioridad';
        $x->paragraph_1 = 'Vivir en la Republica es una experiencia compartida. Por este motivo, el respeto y el orden con indispensables. La consideracion hacia las personas y las instalaciones, la empatia y el consumo responsable de los recursos, conforman la base para poder garantizar un espacio agradable y familiar que tiene como eje principal el estudio y el desarrollo personal de los residentes.';
        $x->paragraph_2 = <<<EOF
Las residentes pueden disfrutar de espacios creados especialmente para ello,pensando en sus necesidades y en su comodidad.

Todas las instalaciones de la residencia has sido creadas pensando en la comodidad y las necesidades de sus residentes.

INSTALACIONES

La residencia es una casa que fue acondicionada para poder ofrecer un lugar de descanso y estudio para aquellos estudiantes que deseen estar cerca de las instalaciones de la Univeridad.

Cuenta con una sala compartida para todos los residentes con televísor, un comedor con capacidad de 11 personas, área para la preparacion y conserva de alimentos, cuarto de servicio, terraza y un cuarto destinado para el personal de Limpieza y vigilancia que estará presente las 24 hrs del día.
EOF;
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Misión, Visión e Ideas';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;

        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Modelo Educativo';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Acreditaciones';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Plan de desarrollo Institucional';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Reglamento';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Historia';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);

        $x = new Post();
        $x->title = 'Identidad';
        $x->subtitle='Lorem';
        $x->paragraph_1 = 'Lorem';
        $x->paragraph_2 = 'Lorem';
        $x->language = 1;
        $x->save();
        $x->categories()->sync([1]);


    }
}

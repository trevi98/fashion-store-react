<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->text('description')->nullable();
            $table->text('cover');
            $table->longText('imgs')->nullable();
            $table->longText('atts')->nullable();
            $table->string('price');
            $table->integer('show')->default(1);
            $table->integer('featured')->default(0);
            $table->foreignId('sub_category_id')->constrained()->onDelete('cascade');
            $table->integer('is_material')->default(0);

        });
    }






    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function favorite(){
        return $this->hasMany(Favorite::class);
    }

    public function attribut(){
        return $this->belongsToMany(Attribut::class,'attribut_product');
    }

    public function attribut_product(){
        return $this->hasMany(AttributProduct::class);
    }

    public function review(){
        return $this->hasMany(Review::class);
    }


    public function sub_category(){
        return $this->belongsTo(Sub_category::class);
    }
}

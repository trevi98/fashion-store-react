<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribut extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function product(){
        return $this->belongsToMany(Product::class);
    }

    public function attribut_product(){
        return $this->hasMany(AttributProduct::class);
    }
}

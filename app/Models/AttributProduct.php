<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttributProduct extends Model
{
    use HasFactory;
    protected $table = "attribut_product";
    protected $guarded = [];

    public function attributt(){
        return $this->belongsTo(Attribut::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }
}

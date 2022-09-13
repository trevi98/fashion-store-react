<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Number;
use Whitecube\NovaFlexibleContent\Flexible;
use Laravel\Nova\Http\Requests\NovaRequest;
use App\Models\Attribut;

class Product extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Product::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'title';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'title',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {   
        $attributes = Attribut::all()->pluck('title','id');
        // return dd(request()->resourceId);
        if (!is_null(request()->resourceId)) {
            $materialProducts = \App\Models\Product::where('id','<>',request()->resourceId)->where('is_material', 1)->get()->pluck('title','id');
        }
        else {
            $materialProducts = \App\Models\Product::where('is_material', 1)->get()->pluck('title','id');
        }
        return [
            // ID::make(__('ID'), 'id')->sortable(),
            Text::make('عنوان', 'title')->rules('required'),
            BelongsTo::make('النوع', 'sub_category', 'App\Nova\SubCategory'),
            Boolean::make('قابل للاستخدام كمادة اوليّة', 'is_material')->rules('required'),
            
            Textarea::make('شرح', 'description')->rules('required'),
            Image::make('صروة المنتج الرئيسية','cover')->creationRules('required'),
            Flexible::make('صور المنتج', 'imgs')
            ->addLayout('صورة', 'img', [
                Image::make('', 'image'),
            ])->button('إضافة صورة')->limit(5),
            Flexible::make('خصائص المنتج', 'atts')
            ->addLayout('خاصّة', 'att', [
                Select::make('الخاصّة','title')->options($attributes)->rules('required'),
                Text::make('قيمة','value')->rules('required'),
            ])
            ->addLayout('مادة', 'material', [
                Select::make('المادة','title')->options($materialProducts)->rules('required'),
            ])->button('إضافة خاصّة'),
            Number::make('سعر','price')->rules('required'),
            Boolean::make('امكانية العرض','show')->default(true),
            Boolean::make('منتج المميز','featured')->default(false),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }

    
    public static function singularLabel()
    {
        return 'منتج';
    }

    public static function label()
    {
        return 'المنتجات';
    }
}

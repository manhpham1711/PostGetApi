<?php

namespace App\Http\Controllers;
use App\Products;
use Illuminate\Http\Request;

class DataController extends Controller {
	function index() {
		$dataProduct = Products::all();
		return $dataProduct;
	}

	function store(Request $request) {
		$name = $request->input('name');
		$price = $request->input('price');

		$product = new Products;

		$product->name = $name;
		$product->price = $price;

		$product->save();

		$responseData = array('data' => null);
		return response()->join($responseData, 200);

	}
}

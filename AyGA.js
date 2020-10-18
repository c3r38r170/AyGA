const uwu=true;
function anguloEntreNormales(u=[0,0],v=[0,0],inDegrees=uwu){
	/*for(let vector of [u,v]){
		if(!('x' in vector)){
			vector.x=vector[0];
		}
		if(!('y' in vector))
			vector.y=vector[1];
	}*/
	[u,v]=standarize(u,v);
	with(Math)
		return acos(
			/* |u.v| */abs(productoPunto(u,v))
			/*-------*//
			/*|u|.|v|*/(abs(modulo(u)) * abs(modulo(v)))
		)*(inDegrees?180/PI:1);
}
function standarize(...vectors){
	for(let vector of vectors){
		if(!('x' in vector))
			vector.x=vector[0];
		if(!('y' in vector))
			vector.y=vector[1];
	}
	return vectors;
}
function proyectar(este=[0,0],sobreEste=[0,0]){
	[este,sobreEste]=standarize(este,sobreEste);
	return productoPunto(este,sobreEste)/modulo(sobreEste);
}
function productoPunto(a,b){
	return a.x*b.x+a.y*b.y;
}
function modulo(vector){
	return Math.sqrt(vector.x**2+vector.y**2);
}
console.log(anguloEntreNormales([3,-1],[2,1]));
console.log(Math.abs(proyectar([2-6,3-4],[5,-3])));
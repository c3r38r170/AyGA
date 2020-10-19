'use strict'
class Operaciones{
	static uwu=true;
	static EN_RADIANES=true;
	static EN_GRADOS=false;
	static radianesAGrados(a){
		return a*180/Math.PI;
	}
	static productoPunto(a,b){
		return a.x*b.x+a.y*b.y;
	}
	static anguloEntreVectores(u,v){
		return Math.acos(
			/* |u.v| */ Math.abs(Operaciones.productoPunto(u,v))
			/*-------*/ /
			/*|u|.|v|*/ (Math.abs(u.modulo) * Math.abs(v.modulo))
		);
	}
}
class Vector{
	static RECTANGULAR=true;
	static POLAR=false;
	constructor(a,b,rectangularOPolar=Vector.RECTANGULAR,enRadianesOGrados=Operaciones.EN_RADIANES){
		if(Array.isArray(a))
			if(typeof a[2]=='number')
				[a,b,rectangularOPolar,enRadianesOGrados]=a;
			else{
				enRadianesOGrados=rectangularOPolar;
				rectangularOPolar=b;
				[x,y]=a;
			}
		
		this.esNulo=false;
		if(typeof rectangularOPolar=='boolean'){
			if(rectangularOPolar==Vector.RECTANGULAR){
				this.x=a;
				this.y=b;
				if(a==0 && b==0){
					this.angulo=Infinity;
					this.modulo=0;
					this.esNulo=true;
				}else{
					this.angulo=Math.atan2(b,a);
					this.modulo=Math.sqrt(a**2+b**2);
				}
			}else{
				this.modulo=a;
				if(enRadianesOGrados==Operaciones.EN_GRADOS)
					b=b*180/Math.PI;
				if(a==0){
					this.angulo=Infinity;
					this.x=0;
					this.y=0;
					this.esNulo=true;
				}else{
					this.angulo=b;
					this.x=a*Math.cos(b);
					this.y=a*Math.sin(b);
				}
			}
			this.versor=new Vector(this.x/this.modulo,this.y/this.modulo,this.angulo,1);
		}else{
			this.x=a;
			this.y=b;
			this.angulo=rectangularOPolar;
			this.modulo=enRadianesOGrados;
			this.versor=this;
		}
	}
	anguloCon(e){
		if(e.name=='Vector')
			return Operaciones.anguloEntreVectores(this,e);
		// else if(e.name=='Plano')
	}
	proyectarSobre(este){
		return Operaciones.productoPunto(this,este)/este.modulo;
	}
}

// console.log(anguloEntreNormales([3,-1],[2,1]));
// console.log(Math.abs(proyectar([2-6,3-4],[5,-3])));

console.log(Operaciones.radianesAGrados(Operaciones.anguloEntreVectores(new Vector(3,-1),new Vector(2,1))));
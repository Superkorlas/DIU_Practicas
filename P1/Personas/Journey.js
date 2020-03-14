/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.Plata";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/Superkorlas/DIU_Practicas";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Elena",
                Photo: "elena.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Le han destinado a trabajar en una escuela de Málaga",
                touch1: "Internet",
                feel1: "5",
                con1: "Debe encontrar un piso donde alojarse con poca antelación.",
                ima1: "cartoon-PCSurprised.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar en internet un estudio individual para alojarse.",
                touch2: "Internet",
                feel2: "2",
                con2: "Todos los estudios individuales son demasiado caros.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide que debe compartir piso con alguien para poder permitirse el alojamiento sin gastar demasiado.",
                touch3: "móvil (para buscar app)",
                feel3: "3",
                con3: "Descarga una aplicación que le recomendaron hace un tiempo.",
                ima3: "cartoon-speaking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Ve que hay muchas ofertas disponibles y varias bastante interesantes, por lo que decide comparar las que más le interesan.",
                touch4: "ordenador",
                feel4: "1",
                con4: "Le resulta muy incómodo comparar ofertas ya que no hay ninguna forma de añadir a favoritos para guardar aquellas que más le gustan.",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "No le queda más remedio que apuntar en un papel los nombres de las ofertas que más le interesan para luego poder compararlas.",
                touch5: "móvil (app)",
                feel5: "2",
                con5: "Tiene que ir buscando las ofertas que tiene apuntadas en el papel continuamente para poder comparar..",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente elige un piso que no le desagrada demasiado pero está demasiado cansada de tener que apuntar pisos en un papel.",
                touch6: "ordenador",
                feel6: "2",
                con6: "Aunque ha encontrado piso no le ha gustado la forma de elegirlo y sabe que habrá mejores, pero le ocupa demasiado tiempo.",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Teresa",
                Photo: "teresa.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Su hermana menor se ha divorciado y le ha pedido ayuda para alquilar piso.",
                touch1: "teléfono",
                feel1: "3",
                con1: "Su hermana debe compartir piso porque no puede permitirse un alquiler para ella sola.",
                ima1: "cartoon-phoning.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide ayudarle ya que su hermana no tiene ordenador y buscar en inmobiliaria es demasiado caro.",
                touch2: "ordenador",
                feel2: "4",
                con2: "Ayuda a su hermana con el ordenador buscando en la web que le ha recomendado su hija.",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Comienza a usar la web buscando piso para su hermana.",
                touch3: "ordenador (llamada)",
                feel3: "2",
                con3: "Hay muchísimas ofertas para mirar.",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Intenta filtrar la búsqueda por la edad, pero solo se permite filtrar por el sexo del compañero, no por la edad.",
                touch4: "ordenador (webapp)",
                feel4: "1",
                con4: "Tiene que buscar entre todas las ofertas alguna compañera de su rango de edad sin poder filtrar resultados por edad. Y hay muchísimas ofertas de gente más joven (estudiantes).",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Dedica un día entero para buscarle piso a su hermana.",
                touch5: "ordenador (webapp)",
                feel5: "2",
                con5: "Hay pocas ofertas de gente de su edad y que se adapten a su capacidad económica.",
                ima5: "cartoon-PCcrying.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue encontrar un piso con una compañera que está en el rango de edad de su hermana y se adapta a sus posibilidades económicas.",
                touch6: "ordenador",
                feel6: "3",
                con6: "Tendrá que ver si son personas compatibles para vivir juntas.",
                ima6: "cartoon-thinking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])




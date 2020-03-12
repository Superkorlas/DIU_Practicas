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
                Photo: "woman.png",
    
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
                con2: "Todos los estudios individuales están demasiado caros.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide que debe compartir piso con alguien para poder permitirse el alojamiento sin gastar demasiado.",
                touch3: "móvil (para buscar app)",
                feel3: "2",
                con3: "Ve que hay demasiadas apps para ello.",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Sus amigas le recomiendan una app.",
                touch4: "ordenador",
                feel4: "4",
                con4: "Hay demasiadas ofertas de gente y le preocupa si se llevará bien con su compañera de piso",
                ima4: "cartoon-speaking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "La app le permite aplicar varios filtros que le permiten buscar algo mejor.",
                touch5: "móvil (app)",
                feel5: "3",
                con5: "La app no permite filtrar con respecto a los inquilinos y eso le preocupa.",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente encuentra un piso que le gusta y dado que aparece el nombre de la inquilina, ha podido buscarlo en las redes sociales y parece una persona agradable.",
                touch6: "ordenador",
                feel6: "4",
                con6: "Le preocupa un poco no caerle bien a la inquilina cuando se conozcan.",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Teresa",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])




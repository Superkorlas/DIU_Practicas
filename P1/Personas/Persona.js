/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.Plata";
        $scope.Curso ="2019/20";
		$scope.Github_ID ="https://github.com/Superkorlas/DIU_Practicas";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Elena",
				Photo: "elena.jpeg",
				Quote: "Cuando cambias tu actitud, cambia tu energía, tu expresión y percepción del mundo.",
				Age: 26,
				Occupation: "Maestra",
				Family: "Con pareja desde hace 6 meses",
				Location: "Cádiz (San Lúcar)",
				Character: "Le gusta bailar bachata y salsa.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Viajar por todo el mundo.", "Tener una casa y formar una familia."],
				Frustrations: ["No puede viajar con sus amigas porque los horarios de trabajo de ellas no le cuadran con los suyos.","No tener más habilidad al volante.", "Ser demasiado torpe/despistado."],
				Bio: "Siempre ha sido buena estudiante aunque muy inquieta y nerviosa. Por ello aunque fuera buena estudiante le llamaban la atención continuamente porque hablaba mucho. Estudió magisterio de educación primaria y lengua extranjera. Lleva 4 años ejerciendo como interina de maestra de francés en primaria. En su tiempo libre le gusta bailar y pasear por la naturaleza. Aunque es muy independiente y le gusta vivir sola, visita a su familia que vive en Sevilla al menos un fin de semana al mes. En parte porque es hija única y quiere darle vuelta a sus padres para comprobar que están bien. Siempre se ha preocupado mucho por los demás.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "Necesita comprarse un coche para ir al trabajo de forma más cómoda.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Teresa",
				Photo: "teresa.jpg",
				Quote: "Más vale un silencio inteligente que una estupidez en voz alta.",
				Age: 54,
				Occupation: "Ama de casa",
				Family: "Casada y con 3 hijos.",
				Location: "Loja, Granada, España",
				Character: "Le gusta coser.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Viajar todos los años al menos una vez."],
				Frustrations: ["No consigue poder ahorrar todos los años para viajar ya que tiene muchos gastos.", "No haber acabado los estudios.", "No tener trabajo remunerado."],
				Bio: "Empezó a estudiar magisterio pero los dejó. Ahora es madre de 3 hijos y le gusta hacer patchwork cuando descansa de las tareas del hogar. Sus hijos tienen 17 y 15 años y su hija 20. Su hija está estudiando biología en la universidad de Granada, y sus hijos ambos están en el instituto de su pueblo. Lleva casada 27 años con su actual pareja, y está convencida de que serán muchos más.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Quiere comprarse un móvil más moderno para poder hablar con su hija por videollamada." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
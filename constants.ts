
import type { Module } from './types';
import { ShieldCheckIcon, SpeakerphoneIcon, HomeIcon } from './components/icons/Icons';

export const COURSES = [
    "3° Medio A",
    "3° Medio B",
    "3° Medio C",
    "3° Medio D",
    "3° Medio E",
    "3° Medio F",
];

export const MODULES: Module[] = [
    {
        id: 'ciberacoso',
        title: 'Ciberacoso y Delitos Cibernéticos',
        description: 'Analiza un caso de acoso virtual, explorando la ética, responsabilidad digital y las consecuencias legales.',
        icon: ShieldCheckIcon,
        activities: [
            { id: 'c1-a1', title: 'Definiendo el Ciberacoso', type: 'multiple-choice', description: 'Pon a prueba tus conocimientos sobre qué constituye el ciberacoso.', content: {
                questions: [
                    {
                        question: "¿Cuál de las siguientes acciones es un ejemplo de ciberacoso?",
                        options: ["Enviar un meme gracioso a un amigo", "Publicar un rumor falso sobre alguien en redes sociales", "Dar 'like' a una foto", "Jugar un videojuego en línea"],
                        answer: "Publicar un rumor falso sobre alguien en redes sociales"
                    },
                    {
                        question: "La 'Ley Pack' en Chile sanciona principalmente:",
                        options: ["La descarga ilegal de música", "La difusión no consentida de imágenes íntimas", "El plagio en trabajos escolares", "El uso de software sin licencia"],
                        answer: "La difusión no consentida de imágenes íntimas"
                    },
                    {
                        question: "¿Cuál es el mejor primer paso a seguir si eres víctima de ciberacoso?",
                        options: ["Eliminar todas tus cuentas de redes sociales.", "Responder al acosador con más agresividad.", "Contárselo a un adulto de confianza (padres, profesor, etc.).", "Ignorarlo y esperar que se detenga por sí solo."],
                        answer: "Contárselo a un adulto de confianza (padres, profesor, etc.)."
                    },
                    {
                        question: "Publicar información privada de una persona en internet sin su permiso (como su dirección o número de teléfono) se conoce como:",
                        options: ["Trolling", "Doxing", "Phishing", "Grooming"],
                        answer: "Doxing"
                    },
                    {
                        question: "En Chile, la Ley de Responsabilidad Penal Adolescente establece que:",
                        options: ["Los menores de edad nunca tienen responsabilidad legal por sus actos.", "Solo los mayores de 18 años pueden ser sancionados por ciberacoso.", "Los mayores de 14 años pueden enfrentar consecuencias legales por delitos graves.", "El ciberacoso no es considerado un delito si lo comete un menor."],
                        answer: "Los mayores de 14 años pueden enfrentar consecuencias legales por delitos graves."
                    },
                    {
                        question: "¿Qué estrategia es más efectiva para prevenir el ciberacoso?",
                        options: ["Compartir tus contraseñas solo con tus mejores amigos.", "Aceptar solicitudes de amistad de cualquier persona para ser popular.", "Pensar cuidadosamente antes de publicar o compartir algo sobre ti u otros.", "Usar tu nombre completo y colegio en tu perfil público."],
                        answer: "Pensar cuidadosamente antes de publicar o compartir algo sobre ti u otros."
                    }
                ]
            }},
            { 
                id: 'c1-a2', 
                title: 'Análisis de Caso: Roles', 
                type: 'drag-drop', 
                description: 'Asigna los roles correctos a los actores en 5 casos de estudio distintos.', 
                content: {
                    targets: [
                        { id: 'role-agresor', text: 'Agresor' },
                        { id: 'role-victima', text: 'Víctima' },
                        { id: 'role-espectador', text: 'Espectador Pasivo' },
                        { id: 'role-defensor', text: 'Defensor' },
                    ],
                    cases: [
                        {
                            id: 'case-1',
                            description: "Un estudiante A publica fotos editadas de un estudiante B en un grupo de chat, agregando comentarios ofensivos. Un estudiante C ve las publicaciones pero no dice nada. Un estudiante D reporta el contenido a un profesor.",
                            items: [
                                { id: 'c1-actor-a', text: 'Estudiante A' },
                                { id: 'c1-actor-b', text: 'Estudiante B' },
                                { id: 'c1-actor-c', text: 'Estudiante C' },
                                { id: 'c1-actor-d', text: 'Estudiante D' },
                            ],
                            correctMapping: { 'c1-actor-a': 'role-agresor', 'c1-actor-b': 'role-victima', 'c1-actor-c': 'role-espectador', 'c1-actor-d': 'role-defensor' }
                        },
                        {
                            id: 'case-2',
                            description: "Estudiante X crea un perfil falso del Estudiante Y, usando su foto y nombre para publicar comentarios groseros. Estudiante Z reconoce que el perfil es falso y le avisa a Y para que lo denuncie.",
                            items: [
                                { id: 'c2-actor-x', text: 'Estudiante X' },
                                { id: 'c2-actor-y', text: 'Estudiante Y' },
                                { id: 'c2-actor-z', text: 'Estudiante Z' },
                                { id: 'c2-actor-publico', text: 'Público que ve los comentarios' },
                            ],
                            correctMapping: { 'c2-actor-x': 'role-agresor', 'c2-actor-y': 'role-victima', 'c2-actor-z': 'role-defensor', 'c2-actor-publico': 'role-espectador' }
                        },
                        {
                            id: 'case-3',
                            description: "Durante una partida en línea, Jugador 1 insulta repetidamente a Jugador 2. Jugador 3 se ríe de los insultos en el chat. Jugador 4 defiende a Jugador 2 y utiliza la herramienta de reporte del juego contra Jugador 1.",
                            items: [
                                { id: 'c3-actor-1', text: 'Jugador 1' },
                                { id: 'c3-actor-2', text: 'Jugador 2' },
                                { id: 'c3-actor-3', text: 'Jugador 3' },
                                { id: 'c3-actor-4', text: 'Jugador 4' },
                            ],
                            correctMapping: { 'c3-actor-1': 'role-agresor', 'c3-actor-2': 'role-victima', 'c3-actor-3': 'role-espectador', 'c3-actor-4': 'role-defensor' }
                        },
                        {
                            id: 'case-4',
                            description: "Estudiante K crea un grupo de WhatsApp para un trabajo y excluye intencionadamente a Estudiante M. Estudiante O está en el grupo, ve la exclusión y no hace nada por miedo a que también lo saquen. Estudiante N se entera y le informa al profesor.",
                            items: [
                                { id: 'c4-actor-k', text: 'Estudiante K' },
                                { id: 'c4-actor-m', text: 'Estudiante M' },
                                { id: 'c4-actor-o', text: 'Estudiante O' },
                                { id: 'c4-actor-n', text: 'Estudiante N' },
                            ],
                            correctMapping: { 'c4-actor-k': 'role-agresor', 'c4-actor-m': 'role-victima', 'c4-actor-o': 'role-espectador', 'c4-actor-n': 'role-defensor' }
                        },
                        {
                            id: 'case-5',
                            description: "Tras terminar una relación, Estudiante S comparte una foto privada de su ex-pareja, Estudiante R, en un grupo. Estudiante T ve la foto y la reenvía a otros. Estudiante V lo ve, le dice a S que lo que hizo es un delito y aconseja a R sobre cómo denunciar.",
                            items: [
                                { id: 'c5-actor-s', text: 'Estudiante S' },
                                { id: 'c5-actor-r', text: 'Estudiante R' },
                                { id: 'c5-actor-t', text: 'Estudiante T' },
                                { id: 'c5-actor-v', text: 'Estudiante V' },
                            ],
                            correctMapping: { 'c5-actor-s': 'role-agresor', 'c5-actor-r': 'role-victima', 'c5-actor-t': 'role-espectador', 'c5-actor-v': 'role-defensor' }
                        }
                    ]
                } 
            },
            { id: 'c1-a3', title: 'Mi Veredicto', type: 'open-question', description: 'Escribe un breve veredicto sobre el caso, justificando tu postura.', content: {
                prompt: "Basado en la evidencia presentada, ¿consideras que el acusado es culpable de ciberacoso? Fundamenta tu respuesta en 50-100 palabras."
            }},
        ],
    },
    {
        id: 'libertad-expresion',
        title: 'Libertad de Expresión vs. Odio',
        description: 'Debate sobre los límites de la libertad de expresión a través del análisis de una canción controversial.',
        icon: SpeakerphoneIcon,
        activities: [
             { id: 'c2-a1', title: 'Análisis Lírico', type: 'multiple-choice', description: 'Identifica figuras retóricas en una letra de canción ficticia.', content: {
                questions: [
                    {
                        question: "En la frase 'tus palabras son puñales', ¿qué figura retórica se utiliza?",
                        options: ["Hipérbole", "Metáfora", "Símil", "Personificación"],
                        answer: "Metáfora"
                    },
                    {
                        question: "Si la letra dice 'lloré ríos por tu ausencia', ¿qué figura se está usando para exagerar el sentimiento?",
                        options: ["Metáfora", "Hipérbole", "Anáfora", "Ironía"],
                        answer: "Hipérbole"
                    },
                    {
                        question: "En el verso 'la noche me abraza con su manto oscuro', ¿qué figura le da cualidades humanas a la noche?",
                        options: ["Símil", "Aliteración", "Personificación", "Epíteto"],
                        answer: "Personificación"
                    },
                    {
                        question: "¿Cuál de estas frases es un ejemplo de Símil, que usa una comparación explícita?",
                        options: ["'Eres un sol'", "'Tus ojos brillan como dos estrellas'", "'El tiempo es oro'", "'La vida es un viaje'"],
                        answer: "'Tus ojos brillan como dos estrellas'"
                    },
                    {
                        question: "La repetición de la frase 'Sueño con...' al inicio de varios versos seguidos es un ejemplo de:",
                        options: ["Anáfora", "Hipérbaton", "Polisíndeton", "Metáfora"],
                        answer: "Anáfora"
                    }
                ]
            }},
             { id: 'c2-a2', title: 'El Debate', type: 'open-question', description: 'Elige y defiende una postura en el debate sobre la canción.', content: {
                 prompt: "¿Debería una canción con letra controversial ser censurada? Argumenta a favor o en contra, considerando la libertad de expresión y el discurso de odio."
             } },
        ],
    },
    {
        id: 'derecho-vivienda',
        title: 'Derecho a la Vivienda y Desalojo',
        description: 'Examina un conflicto por la toma de un terreno, sopesando el derecho a la propiedad y el derecho a la vivienda.',
        icon: HomeIcon,
        activities: [
            { 
                id: 'c3-a1', 
                title: 'Mapa de Actores', 
                type: 'drag-drop', 
                description: 'Conecta a los actores del conflicto con sus principales intereses.', 
                content: {
                    targets: [
                        { id: 'interes-vivienda', text: 'Garantizar el derecho a una vivienda digna.' },
                        { id: 'interes-propiedad', text: 'Defender el derecho a la propiedad privada.' },
                        { id: 'interes-social', text: 'Mediar y buscar soluciones sociales.' },
                        { id: 'interes-ddhh', text: 'Proteger los derechos humanos de los involucrados.' },
                    ],
                    cases: [{
                        id: 'case-desalojo',
                        description: "Un grupo de familias sin vivienda ha ocupado un terreno privado que llevaba años abandonado. El dueño, una empresa inmobiliaria, exige el desalojo para construir un proyecto de lujo. La municipalidad y ONGs de derechos humanos intervienen.",
                        items: [
                            { id: 'actor-familias', text: 'Familias Ocupantes' },
                            { id: 'actor-empresa', text: 'Empresa Inmobiliaria' },
                            { id: 'actor-municipalidad', text: 'Municipalidad' },
                            { id: 'actor-ong', text: 'ONGs de DD.HH.' },
                        ],
                        correctMapping: {
                            'actor-familias': 'interes-vivienda',
                            'actor-empresa': 'interes-propiedad',
                            'actor-municipalidad': 'interes-social',
                            'actor-ong': 'interes-ddhh',
                        }
                    }]
                } 
            },
            { 
                id: 'c3-a2', 
                title: 'Balanza de Derechos', 
                type: 'open-question', 
                description: 'Propón una solución que equilibre los derechos en conflicto.', 
                content: {
                    prompt: "¿Cómo se podría resolver el conflicto de la toma de terreno de una manera justa para todas las partes? Describe una posible solución que considere tanto el derecho a la vivienda como el derecho a la propiedad."
                }
            },
        ],
    },
];

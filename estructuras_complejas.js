//Se crea el Array alumnos que contiene 2 alumnos
var alumnos = [
        {
            id: 1, 
            nombre :  "Sebastian",
            edad : 22,
            tel: "6022601024",    
//se crea el objeto familia ya que contiene los familiares del alumno           
            familia: 
               {
                padre: "Armando",
                madre: "Martha",
//se crea el objeto hermanos el cual contiene los hermanos del alumno                
                hermanos: [
                    {
                        nombre: "Gabriela",
                        edad: 19
                    },
                    {
                        nombre: "Zeus",
                        edad: 40
                    }
                ]
            
                
               }            
        },
        {
            id: 2, 
            nombre :  "Pablo",
            edad : 30,
            tel: "3163372382",    
            
            familia: 
               {
                padre: "Julian",
                madre: "Emelia",
                hermanos: [
                    {
                        nombre: "Bryan",
                        edad: 20
                    },
                    {
                        nombre: "Jose",
                        edad: 30
                    }
                ]
            
                
               }            
        }
]
// Acceso por consola al nombre del hermano 0 del alumno 0
console.log(alumnos[0].familia.hermanos[0].nombre);
// Acceso por consola al nombre del hermano 1 del alumno 1
console.log(alumnos[1].familia.hermanos[1].nombre);

var videos = {
        titulo: "titulo del video",
        canal: "Sebas Developer",
        imagenCanal: "https//:sebasimagen.com",
        descripcion: "Un video melo",
        miniatura: "https//sebasimagenmela.com",
        visitas: "50000",
        nuevo: true
}


var listaVideos = [
    {
        titulo: "titulo del video",
        canal: "Sebas Developer",
        imagenCanal: "https//:sebasimagen.com",
        descripcion: "Un video melo",
        miniatura: "https//sebasimagenmela.com",
        visitas: "50000",
        nuevo: true,
        comentarios : [
            {
                nombre: "nombre de la persona que comenta",
                comentario: "Melo el video",
                fecha: "la fecha del video",
                mostrar: true
            },
            {
                nombre: "nombre de la persona que comenta",
                comentario: "Mal video borrenlo y tirenlo al rio",
                fecha: "la fecha del video",
                mostrar: true
            }


        ]
        },
    {
        titulo: "titulo del video",
        canal: "Sebas Developer",
        imagenCanal: "https//:sebasimagen.com",
        descripcion: "Un video melo",
        miniatura: "https//sebasimagenmela.com",
        visitas: "50000",
        nuevo: true
        },
    {
        titulo: "titulo del video",
        canal: "Sebas Developer",
        imagenCanal: "https//:sebasimagen.com",
        descripcion: "Un video melo",
        miniatura: "https//sebasimagenmela.com",
        visitas: "50000",
        nuevo: true
        }       
]

console.log(listaVideos[0].comentarios[1].comentario);
listaVideos[0].comentarios[1].comentario = "Modifico el comentario";
console.log(listaVideos[0].comentarios[1].comentario);

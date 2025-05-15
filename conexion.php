<?php
$host="localhost";
$port="5432";
$bd= "SEL";
$user= "SEL";
$pass= "123456";

$conn=pg_connect("host=$host dbname=$bd user=$user password=$pass port=$port");

if (!$conn) {
    die("Error de conexión: " . pg_last_error());
}else{
    echo'conexion exitosa';
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $departamento = $_POST['departamento'];
    $provincia = $_POST['provincia'];
    $municipio = $_POST['municipio'];
    $superficie = $_POST['superficie'];

    $query = "INSERT INTO public_uno.caracteristicas_dos (departamento, provincia, municipio, superficie)
             VALUES ('$departamento', '$provincia', '$municipio', '$superficie')";
    $result = pg_query($conn, $query);

    if ($result) {
        echo "Datos insertados correctamente.";
    } else {
        echo "Error al insertar datos: " . pg_last_error($conn);
    }

    pg_close($conn);
}
?>

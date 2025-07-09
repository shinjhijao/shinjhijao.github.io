<?php
$host = "localhost";
$dbname = "SEL";
$user = "SEL";
$password = "123456";

$conn = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (!$conn) {
    die("Error de conexión: " . pg_last_error());
}else{
    echo'conexion exitosa';
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ident = $_POST["ident"];
    $departamento = $_POST["departamento"];
    $municipio = $_POST["municipio"];
    $pob_hombres = $_POST["pob_hombres"];
    $pob_mujeres = $_POST["pob_mujeres"];


    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla "datos"
        $sql1 = "INSERT INTO public_uno.datos (id, departamento, municipio) VALUES (:ident, :departamento, :municipio)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident,':departamento' => $departamento, ':municipio' => $municipio]);
        


        // Inserción en la tabla "población" usando el mismo ID
        $sql2 = "INSERT INTO public_uno.poblacion (id, pob_hombres, pob_mujeres) VALUES (:ident, :pob_hombres, :pob_mujeres)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute([':ident' => $ident, ':pob_hombres' => $pob_hombres, ':pob_mujeres' => $pob_mujeres]);

        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>